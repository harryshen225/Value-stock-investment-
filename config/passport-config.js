const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //callback function  - check and create user if needed
        console.log('profile~~~~~~~~~~~~`')
        const { sub, given_name, family_name, picture, email } = profile._json;
        User.findOne({ email }).then(currentUser => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                new User({
                    email,
                    firstName: given_name,
                    lastName: family_name,
                    displayName: `${given_name} ${family_name}`,
                    picture,
                    venderId: sub
                }).save().then(newUser => {
                    console.log('new user created ' + newUser);
                    done(null, newUser);
                })
            }
        })
    })
)

passport.use(
    new FacebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: '/auth/facebook/redirect',
        // profileFields: ['id', 'email', 'gender', 'photo', 'locale', 'name', 'timezone', 'updated_time', 'verified']
        profileFields: ['email','id','first_name','last_name','picture']
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const { id, last_name, first_name, picture, email } = profile._json;
        User.findOne({ email }).then(currentUser => {
            if (currentUser) {
                done(null, currentUser);
            } else {
                new User({
                    email,
                    firstName: first_name,
                    lastName: last_name,
                    displayName: `${first_name} ${last_name}`,
                    picture: picture.data.url,
                    venderId: id
                }).save().then(newUser => {
                    console.log('new user created ' + newUser);
                    done(null, newUser);
                })
            }
        })
    })
)

//serialise user
passport.serializeUser((user, done) => {
    console.log('serialising user')
    done(null, user.id);
})



//deserialise user

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        console.log('deserialising user ', user)
        done(null, user);
    })
})