const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const path = require('path');

//! Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//! Set the static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/demo_login_db')

//! Test the connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}) .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
//! Get all user data
const userDataRouter = require('./router/user_data');
app.use('/', userDataRouter);
//! Create a new user
const createUserRouter = require('./router/create_user');
app.use('/create_user', createUserRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})