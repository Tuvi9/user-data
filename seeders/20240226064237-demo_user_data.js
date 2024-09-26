'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.bulkInsert('user_data', [
          {
            username: 'Kaspar1',
            password: 'qwerty',
            email: 'kaspar.pavel@voco.ee',
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ]),
      queryInterface.bulkInsert('user_data', [
        {
          username: 'Kalle2',
          password: 'asdfg',
          email: 'kalle.riit@voco.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]),
      queryInterface.bulkInsert('user_data', [
        {
          username: 'Sass3',
          password: 'zxcvb',
          email: 'a.potasenkov@voco.ee',
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
