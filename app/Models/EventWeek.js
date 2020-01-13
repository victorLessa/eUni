'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event_week = sequelize.define('Event_week', {
    event_id:DataTypes.STRING,
    day_week_id: DataTypes.STRING
  }, {});
  return Event_week;
};