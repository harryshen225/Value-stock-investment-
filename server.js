const express = require('express');
const PORT = process.env.PORT || 3001;
const authRouter = require('./routes/auth-routes');
const passportSetup = require('./config/passport-config');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cookieSession({
    maxAge: 60 * 1000 * 60,
    keys: [keys.session.sessionKey]
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || keys.mongodb.dbURI)
app.use('/auth',authRouter);

app.listen(PORT, ()=>{
    console.log('listening to port ', PORT)
})