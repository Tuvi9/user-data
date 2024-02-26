const express = require('express');
const router = express.Router();

//! Should render form to create account
router.get('/create_user', (req, res) => {
    res.render('create_user');
})

module.exports = router;