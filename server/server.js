<<<<<<< HEAD
=======
// packages
require('dotenv').config();
>>>>>>> b4268066b3e70f03dcc5e2d507f8fe8d640970c6
const express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive'),
        session = require('express-session'),
        passport = require('passport'),
        Auth0Strategy = require('passport-auth0');

require ('dotenv').config();

<<<<<<< HEAD
const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
=======
// controller(s)
const friend_controller = require('./controllers/friend_controller');
const search_controller = require('./controllers/search_controller');
>>>>>>> b4268066b3e70f03dcc5e2d507f8fe8d640970c6

// const app = express();
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

<<<<<<< HEAD
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
            done(null, user[0].id)
        } else {
            db.create_users([profile.identities[0].user_id]).then(user => {
                done(null, user[0].id)
            })
        }
    })
}))  

passport.serializeUser(function(userId, done) {
    console.log(userId);
    done(null, userId);
})


passport.deserializeUser(function(userId,done) {
    app.get('db').current_user([userId]).then(res => {
        done(null, res[0]);
    })
}) 

app.get('/auth/user', (req, res) => { //Making sure the user exists and is redirected to the frontend or an error will occur
    // res
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
=======
// app.use(passport.initialize());
// app.use(passport.session());

// // connects to our database
// massive(process.env.CONNECTION_STRING).then( db => {
//         app.set('db', db)
//     });

// passport.use( new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK
// }, function(accessToken, refreshToken, extraParams, profile, done) {
//     const db = app.get('db'); // calls our database forward to this Strategy
//     console.log('I am here');
//     done(null, userID);
// }

// ))

// passport.serializeUser(function(userId, done) {
//     done(null, userId);
// })

// passport.deserializeUser(function(userId, done) {
//     app.get('db').current_user([userId]).then ( user => {
//         done(null, user[0]);
//     })
// });

// // our authentication endpoints
// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3000/#/dashboard',
//     failureRedirect: '/auth'
// }))

// // checks for user object on session
// app.get('/auth/authenticated', (req, res, next) => {
//     if (!req.user) {
//       return res.status(403).send('User not found');
//     } else {
//       return res.status(200).send(req.user);
//     }
// })

// // destroys current session
// app.get('/auth/logout', (req, res) => {
//     req.logOut();
//     res.redirect(200, 'http://localhost:3000/')
// });

// friend endpoints (or... friendpoints...)
app.get('/api/friend/list', friend_controller.read);
app.post('/api/friend/add', friend_controller.add);
app.post('/api/friend/remove', friend_controller.delete);

// search endpoint
app.get('/api/friend/list', search_controller.search); 

// user endpoints
>>>>>>> b4268066b3e70f03dcc5e2d507f8fe8d640970c6

const PORT = 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));