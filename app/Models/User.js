const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      nome: DataTypes.STRING,
      ultimo_login: DataTypes.DATE,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    },
    {
      sequelize,
    }
  )
  User.associate = models => {
    User.hasMany(models.Phone, { foreignKey: 'user_id', as: 'phones' })
  }
  User.beforeCreate(async (user, options) => {
    return (user.senha = await bcrypt.hash(user.senha, 10))
  })
  return User
}
