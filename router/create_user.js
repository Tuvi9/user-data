const express = require('express');
const router = express.Router();
const { register } = require('../controller/create_user'); 
const { login } = require('../controller/login_user');

//! Create a new user
router.post('/create', register)

//! Render views
router.get('/', (req, res) => {
    res.render('default');
});

router.get('/create', (req, res) => {
    res.render('create');
});

//! Login a user
router.post('/login', login)

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;