const bcrypt = require('bcrypt');
const User = require('../models/user_data');

const register = (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: cryptPassword
        }).then((registered) => {
            req.session.user = {
                username: registered.username,
                email: registered.email,
                id: registered.id
            }
            console.log(req.session);
            res.json({
                message: 'User created successfully',
                user: registered,
                user_session: req.session.user
            })
        })
    })
}

module.exports = {register}