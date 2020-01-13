'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventWeek = sequelize.define('EventWeek', {
    event_id:DataTypes.STRING,
    day_week_id: DataTypes.STRING
  }, { sequelize, modelName: 'event_weeks' });
  return EventWeek;
};