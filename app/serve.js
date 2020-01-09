const app = require('./app')

app.listen(process.env.PORT || 8080, () => {
  console.log(`Start app in port ${process.env.PORT || 8080}`)
})

module.exports = app
