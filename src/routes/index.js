// const express = require('express')
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index.ejs')
})


router.post('/register', (req, res) => {

})


router.get('/profile', (req, res, next) => {
    
})

module.exports = router;