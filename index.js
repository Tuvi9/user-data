const express = require('express');
const hbs = require('express-handlebars');
const { Sequelize } = require('sequelize');
const app = express();
const path = require('path');

//! Set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}));

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

//! app.use
//* Access the public folder
app.use(express.static('public'));

//* Get all user data
const userDataRouter = require('./router/user_data');
app.use('/', userDataRouter);

//* Create a new user
const createUserRouter = require('./router/create_user');
app.use('/createUserForm', createUserRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})