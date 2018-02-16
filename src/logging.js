// create a rolling file logger based on date/time that fires process events
const config = require('./config/server')

const opts = {
    errorEventName:'error',
    logDirectory: `/var/log/${config.var_name}`, // NOTE: folder must exist and be writable...
    fileNamePattern:'app-<DATE>.log',
    dateFormat:'YYYY.MM.DD'
}

module.exports.log = require('simple-node-logger').createRollingFileLogger(opts)
// TODO env.property
log.setLevel(config.log_level)
