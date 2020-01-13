'use strict';
module.exports = (sequelize, DataTypes) => {
  const DayWeek = sequelize.define('DayWeek', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name_day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  DayWeek.associate = models => {
    DayWeek.belongsToMany(models.Event, { foreignKey: 'day_week_id', through: models.EventWeek })
  }
  return DayWeek;
};