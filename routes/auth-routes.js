const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');


//auth login
router.get('/login', (req, res)=>{
    console.log('login', req.user)
    if(req.user){
        res.json({
            fullName: req.user.firstName + ' ' + req.user.lastName,
            email: req.user.email,
            venderId: req.user.venderId,
            authenticated: true
        })
    }
})

//auth logout
router.get('/logout', (req, res)=>{
    req.logout();
    res.json({
        logout: 'success'
    })
})

// auth auth with google
router.get('/google',passport.authenticate('google',{
    scope: ['profile','email']
}));

router.get('/google/redirect',passport.authenticate('google'),(req, res)=>{
    //login with google
    res.redirect('https://localhost:3000/admin/dashboard')
})


router.get('/facebook',passport.authenticate('facebook',{
    scope: ['email']
}));

router.get('/facebook/redirect',passport.authenticate('facebook'),(req, res)=>{
    //login with facebook
    res.redirect('https://localhost:3000/admin/dashboard')
})

module.exports = router;