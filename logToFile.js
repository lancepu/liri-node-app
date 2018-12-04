const fs = require('fs')

module.exports = function logToFile(message){
  try {
    fs.appendFileSync("log.txt", message)
  } catch (err) {
    console.log(err)
  }
}
