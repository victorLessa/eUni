'use strict';

const tableName = 'events'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      day_week: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'days_week',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
