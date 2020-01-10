'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    day_week: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    } 
  }, {});
  Events.associate = function(models) {
    Events.belongsTo(models.days_week, { as: 'days_week' })
  };
  return Events;
};