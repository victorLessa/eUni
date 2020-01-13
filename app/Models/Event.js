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
    day_week_id: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  }, {});
  Event.associate = function (models) {
    Event.belongsToMany(models.Event_week, {
      through: 'event_week',
      foreignKey: 'event_id'
    })
    Event.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
  };
  return Event;
};