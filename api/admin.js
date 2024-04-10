/ /api/admin.js
const Sequelize = require('sequelize');
const userDataRouter = require('../router/user_data');

module.exports = async (req, res) => {
  const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/demo_login_db');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    userDataRouter(req, res, () => {});
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    res.status(500).send('Unable to connect to the database.');
  } finally {
    await sequelize.close();
  }
};