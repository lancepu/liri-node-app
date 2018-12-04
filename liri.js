const inquirer = require('inquirer')
const help = require('./help')
const concertThis = require('./concertThis')
const movieThis = require('./movieThis')
const spotifyThis = require('./spotifyThis')
const randomThis = require('./randomThis')
const logToFile = require('./logToFile')

let command = process.argv[2];

switch (command) {
    case ('-help'):
        console.log(help)
        break;
    case ('concert-this'):
        inquirer.prompt([createPrompt('Please enter a artist/band name: ')]).then(answer => {
            if (answer.input !== "") {
                logToFile(`\r\n${command} ${answer.input}\r\n`)
                concertThis(answer.input)
            }
            else (concertThis('Bruno Mars'))
        })
        break;
    case ('movie-this'):
        inquirer.prompt([createPrompt('Please enter a movie title: ')]).then(answer => {
            if (answer.input !== "") {
                logToFile(`\r\n${command} ${answer.input}\r\n`)
                movieThis(answer.input)
            }
            else(movieThis("Mr. Nobody"))
        })
        break;
    case ('spotify-this'):
        inquirer.prompt([createPrompt('Please enter a song title: ')]).then(answer => {
            if (answer.input !== "") {
                logToFile(`\r\n${command} ${answer.input}\r\n`)
                spotifyThis(answer.input)
            }
            else(spotifyThis("The Sign by Ace of Base"))
        })
        break;
    case ('random-this'):
        randomThis()
        break;
    default:
            logToFile('\r\nInvalid input, please use -help to see a list of commands\r\n')
            console.log('Invalid input, please use -help to see a list of commands')
    
}

function createPrompt(message){
    let prompt = {
        type: 'input',
        message: message,
        name: 'input'
    }
    return prompt
}


