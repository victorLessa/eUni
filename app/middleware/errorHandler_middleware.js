const errorHandler = (err, req, res, next) => {
  res.status(500).send({
    message: err.message,
    stack: err.stack,
    status: 500,
  })
}

module.exports = errorHandler
