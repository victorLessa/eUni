const fs = require('fs')
const path = require('path')

module.exports = app => {
  fs.readdirSync(path.join(__dirname)).forEach(files => {
    let file = path.join(__dirname, files)
    if (files !== 'index.js') {
      app.use('/api', require(file))
    }
  })
}
