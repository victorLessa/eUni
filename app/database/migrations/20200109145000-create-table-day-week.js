'use strict';

const tableName = "days_week"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name_day: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
