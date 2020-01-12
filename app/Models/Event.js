'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    user_id: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: DataTypes.STRING
    },
    day_week: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    } 
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.days_week, { as: 'days_week' })
    Event.belongsTo(models.User, { as: 'users' })
  };
  return Event;
};