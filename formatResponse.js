const chalk = require('chalk')
const logToFile = require('./logToFile')

module.exports = function formatResponse(key, data){
    console.log(chalk.green(key) + chalk.blue(data))
    logToFile(`${key}${data}\r\n`)
}