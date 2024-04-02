const bcrypt = require('bcrypt');
const model = require('../models');
const nodeMailer = require('nodemailer');



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
            //! Nodemailer
            //? SMTP Information
            const transporter = nodeMailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: 'kaspupavel@gmail.com',
                    //? Generated password for gmail authentication
                    pass: 'rpxm yfpf tuli rlet'
                }
            });
            //? Create the mail form
            const mailOptions = {
                from: 'kaspupavel@gmail.com',
                to: registered.email,
                subject: 'Registration Successful',
                text: 'Welcome to our website!: localhost:3000/users/login'
            };
            //? Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

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