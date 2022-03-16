'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clube_name: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clubs');
  }
};