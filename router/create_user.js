const express = require('express');
const router = express.Router();
const { register } = require('../controller/create_user'); 

//! Create a new user
router.post('/create', register)

//! Render views
router.get('/', (req, res) => {
    res.render('default');
});

router.get('/create', (req, res) => {
    res.render('form');
});

module.exports = router;