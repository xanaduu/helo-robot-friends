require ('dotenv').config();

const express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive'),
        session = require('express-session'),
        passport = require('passport'),
        Auth0Strategy = require('passport-auth0');


const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use( passport.initialize() );
app.use( passport.session() );

// controller(s)
const friend_controller = require('./controllers/friend_controller');
const search_controller = require('./controllers/search_controller');

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
})

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
 console.log(profile.identities[0].user_id)
    db.current_user([profile.identities[0].user_id]).then(user => {
      
        if (user[0]){
            done(null, user[0].auth_id)
        } else {
            db.create_users([profile.identities[0].user_id]).then(user => {
                done(null, user[0].auth_id)
            })
        }
    })
}))  

passport.serializeUser(function(userId, done) {
    console.log(userId);
    done(null, userId);
})


passport.deserializeUser(function(userId,done) {
    console.log(userId)
    app.get('db').current_user([userId]).then(res => {
        console.log('after dese db')
        done(null, res[0]);
    })
})

app.get('/auth/user', (req, res) => { 
    //Making sure the user exists and is redirected to the frontend or an error will occur
    if (!req.user) {
        return res.status(404).send('Not Found Bro, Sorry');
    } else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}));

app.get('/auth/logout', (req, res) => {
    req.logOut(); //This will kill the session
    res.redirect(302, "http://localhost:3000")
})

// friend endpoints (or... friendpoints...)
app.get('/api/friend/list', friend_controller.read);
app.post('/api/friend/add', friend_controller.add);
app.post('/api/friend/remove', friend_controller.delete);

// search controller 
app.get('/api/friend/list', search_controller.search); 

const PORT = 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));