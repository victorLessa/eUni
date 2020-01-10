'use strict';
module.exports = (sequelize, DataTypes) => {
  const DayWeek = sequelize.define('days_week', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name_day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  return DayWeek;
};