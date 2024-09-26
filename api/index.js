const express = require('express');
const hbs = require('express-handlebars');
const { Sequelize } = require('sequelize');
const app = express();
const sessions = require('express-session');
const dotEnv = require('dotenv')
dotEnv.config()

//! Handlebars
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname + '../../views/layouts',
}));

//! Set the static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessions({
    secret: 'secret-key',
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
    saveUninitialized: true
})); 
 

const sequelize = new Sequelize(process.env.DATABASE_URL)

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
app.use('/admin', userDataRouter);

//* User creation and login routes
const createUserRouter = require('./router/create_user');
app.use('/users', createUserRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})