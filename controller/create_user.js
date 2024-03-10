const bcrypt = require('bcrypt');
const model = require('../models');

const register = (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10, (error, cryptPassword) => {
        //* Save the user data
        model.user_data.create({
            username: req.body.username,
            email: req.body.email,
            password: cryptPassword
        //? If the user is created successfully
        }).then((registered) => {
            req.session.user = {
                username: registered.username,
                email: registered.email,
                id: registered.id
            }
            //? Display the user data
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