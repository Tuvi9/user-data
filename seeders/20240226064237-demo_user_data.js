'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.bulkInsert('user_data', [
          {
            username: 'Kaspar1',
            password: 'qwerty',
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ]),
      queryInterface.bulkInsert('user_data', [
        {
          username: 'Kalle2',
          password: 'asdfg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]),
      queryInterface.bulkInsert('user_data', [
        {
          username: 'Sass3',
          password: 'zxcvb',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    ])
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_data', null, {});
  }
};
