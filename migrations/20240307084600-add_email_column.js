'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('user_data', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('user_data', 'email');
  }
};
