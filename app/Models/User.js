const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      nome: DataTypes.STRING,
      ultimo_login: DataTypes.DATE,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
    }
  )
  User.associate = models => {
    User.hasMany(models.Phone, { foreignKey: 'user_id', as: 'phones' })
    User.hasMany(models.Event, { foreignKey: 'user_id', as: 'events' })
  }
  User.beforeCreate(async (user, options) => {
    return (user.password = await bcrypt.hash(user.password, 10))
  })
  return User
}
