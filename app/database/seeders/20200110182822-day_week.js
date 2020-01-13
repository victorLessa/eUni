'use strict';

const tableName = "day_weeks"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      {
        name_day: 'Sunday',
      },
      {
        name_day: 'Monday'
      },
      {
        name_day: 'Tuesday'
      },
      {
        name_day: 'Wednesday'
      },
      {
        name_day: 'Thursday'
      },
      {
        name_day: 'Friday'
      },
      {
        name_day: 'Saturday'
      }
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
