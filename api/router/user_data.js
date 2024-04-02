const express = require('express');
const router = express.Router();

const userController = require('../../controller/admin/user_data');
//! Get all user data
router.get('/', userController.getAllData);

module.exports = router;