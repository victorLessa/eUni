const moment = require('moment-timezone')
const timeZone = async date => {
  moment.locale('pt-br')
  return await moment(date)
    .tz('America/Sao_Paulo')
    .format('LLL')
}
const timeDifference = async user => {
  const last_login = moment(user.dataValues.ultimo_login).tz(
    'America/Sao_Paulo'
  )
  const currente_time = moment(new Date()).tz('America/Sao_Paulo')
  let time_difference = currente_time - last_login
  return time_difference / 60000
}
module.exports = {
  timeZone,
  timeDifference,
}
