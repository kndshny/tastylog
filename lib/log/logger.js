const log4js = require('log4js')
const config = require('../../config/log4js.config')

log4js.configure(config)

// Consle logger
console = log4js.getLogger()

module.exports = {
  console
}