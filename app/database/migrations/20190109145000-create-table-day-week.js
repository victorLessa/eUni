'use strict';

const tableName = "day_weeks"
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
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
