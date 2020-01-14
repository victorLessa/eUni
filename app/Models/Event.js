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
    date: {
      type: DataTypes.STRING
    },
    hours: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {});
  Event.associate = function (models) {
    Event.belongsToMany(models.DayWeek, {
      through: models.EventWeek,
      foreignKey: 'event_id'
    })
    Event.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
  };
  return Event;
};