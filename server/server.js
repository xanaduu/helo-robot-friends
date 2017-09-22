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

massive(process.env.CONNECTION_STRING)
    .THEN( db => {
        app.set('db', db);
    })

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    //const db = app.get('db');
    done(null, user)
}

))

passport.serializeUser(function(userId, done) {
    done(null, userId);
})

passport.deserializeUser(function(userId, done) {
    app.get('db').current_user([userId]).then ( user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: '/auth'
}))

app.get('/auth/user', (req, res, next) => {
    if (!req.user) {
    return res.status(404).send('User not found');
    } else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
})

const PORT = 3030;
app.listen(PORT, () => console.log('Listening on port: ', PORT))