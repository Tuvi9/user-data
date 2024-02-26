'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('user_data', 'username', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }),
      queryInterface.changeColumn('user_data', 'password', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  },
  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('user_data'),
    ])
  }
};