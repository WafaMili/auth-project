'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'name', 'full_name');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'full_name', 'name');
  }
};
