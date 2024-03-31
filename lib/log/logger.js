const log4js = require('log4js')
const config = require('../../config/log4js.config')
let console, applicaiton

log4js.configure(config)

// Consle logger
console = log4js.getLogger()

// Application logger
applicaiton = log4js.getLogger('application')

// Access logger
access=log4js.getLogger('access')

module.exports = {
  console,
  applicaiton,
  access
}