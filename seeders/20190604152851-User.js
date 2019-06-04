'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('users', [{
      firstName: "Kevin",
      lastName: "Mahoney",
      email: "kevin@kev.in",
      password: "123456",
      
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
