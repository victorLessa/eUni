'use strict';

const tableName = 'event_weeks'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      day_week_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'day_weeks',
          id: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
