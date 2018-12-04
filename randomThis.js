const fs = require('fs')
const concertThis = require('./concertThis')
const movieThis = require('./movieThis')
const spotifyThis = require('./spotifyThis')
const logToFile = require('./logToFile')

module.exports = function randomThis(){
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
        let randomArr = data.split('\r\n')
        let randomIndex = Math.floor(Math.random() * randomArr.length)
        let randomCommand = randomArr[randomIndex]
        let command = randomCommand.split(',')
        let cm = command[0]
        let param = command[1].replace (/(^")|("$)/g, '')

        logToFile(`\r\n${cm} ${param}\r\n`)

        switch (cm){
            case ('concert-this'):
                concertThis(param)
                break;
            case ('movie-this'):
                movieThis(param)
                break;
            case ('spotify-this'):
                spotifyThis(param)
                break;
            default:
                logToFile('\r\ninvalid command, please check your random.txt file\r\n')
                console.log("invalid command, please check your random.txt file")
        }
    })
}
