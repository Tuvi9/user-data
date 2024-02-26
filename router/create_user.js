const express = require('express');
const router = express.Router();

//! Should render form to create account
router.get('/', (req, res) => {
    res.render('form');
});

module.exports = router;