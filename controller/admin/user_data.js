const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/demo_login_db')
const models = require('../../models');

//! Get all user data
const getAllData = (req, res) => {
    models.user_data.findAll()
    .then(result => {
        console.log(result);
        return res.status(200).json({ result });
    }) .catch(error => {
        console.log(error);
        return res.status(500).json({ error });
    })
}

module.exports = {
    getAllData
}
