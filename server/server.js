require('dotenv').config();
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

app.use(passport.initialize());
app.use(passport.session());

// connects to our database
massive(process.env.CONNECTION_STRING).then( db => {
        app.set('db', db)
    });

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db'); // calls our database forward to this Strategy
    console.log('I am here');
    done(null, userID);
}

))

passport.serializeUser(function(userId, done) {
    done(null, userId);
})

passport.deserializeUser(function(userId, done) {
    app.get('db').current_user([userId]).then ( user => {
        done(null, user[0]);
    })
});

// our authentication endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}))

// checks for user object on session
app.get('/auth/authenticated', (req, res, next) => {
    if (!req.user) {
      return res.status(403).send('User not found');
    } else {
      return res.status(200).send(req.user);
    }
})

// destroys current session
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(200, 'http://localhost:3000/')
});

// friend endpoints
// list all friends of the logged in user
// app.get()

const PORT = 3030;
app.listen(PORT, () => console.log('Listening on port: ', PORT))