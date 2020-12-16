const moment = require('moment')
exports.relativeTime = time => moment().unix()
exports.format = () => moment().format('YYYY-MM-DD HH:mm:ss')