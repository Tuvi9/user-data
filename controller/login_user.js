const bcrypt = require('bcrypt');
const user_data = require('../models');

const login = (req, res) => {
    console.log(req.body);
    user_data.user_data.findOne({
        where: {
            username: req.body.username
        }
    })
    .then((user) => {
        //? If the user is not found
        if(!user) {
            res.json({
                message: 'User not found'
            })
        } else {
            //? Compare the password
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if(result) {
                    req.session.user = {
                        username: user.username,
                        email: user.email,
                        id: user.id
                    }
                    //? If the user is logged in successfully
                    console.log(req.session);
                    res.json({
                        message: 'User logged in successfully',
                        user: user,
                        user_session: req.session.user
                    })
                //? If the password is incorrect
                } else {
                    res.json({
                        message: 'Password is incorrect'
                    })
                }
            })
        }
    }
    
    )}

module.exports = {login}