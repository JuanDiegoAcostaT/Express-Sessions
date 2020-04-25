// const express = require('express')
const { Router } = require('express');
const router = Router();
const session = require('express-session');


router.get('/', (req, res) => {
    res.render('index.ejs')
})


router.post('/register', (req, res) => {
    console.log(req.body);
    // res.send('received')
    // req.session.userData = req.body ;
    req.flash('user', req.body);
    req.flash('success', 'Now you are registered');
    res.redirect('/profile');
})


router.get('/profile', (req, res, next) => {
    // const user = req.session.userData;
    // delete req.session.userData

    const user = req.flash('user')[0];
    const msg = req.flash('success')[0];

    res.render('profile.ejs', {
        user,
        msg
    })

})

module.exports = router;