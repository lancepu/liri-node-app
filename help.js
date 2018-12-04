const commandLineUsage = require('command-line-usage')
const chalk = require('chalk')

const sections = [
    {
        header: 'LIRI Node App',
        content: 'A simple command line interface for calling APIs from Spotify, Bands in Town and OMDB'
    },
    {
        header: 'Commands',
        content: [
            {name: chalk.green('-help'), summary: 'Display help information about the app.'},
            {name: chalk.green('concert-this'), summary: 'Queries the Bands in Town database to get the upcoming events for the artist/band.'},
            {name: chalk.green('movie-this'), summary: 'Queries the OMDB database to get the relevant movie information.'},
            {name: chalk.green('spotify-this'), summary: 'Queries the Spotify database to get the relevant song information.'},
            {name: chalk.green('random-this'), summary: 'Randomly performs of of the [concert-this, movie-this, spotify-this] operations, can be configured using random.txt file'},
        ]
    },
    {
        header: 'Random.txt file',
        content: `Put each individual command in one line, the format of the command is: ${chalk.green('command,"param"')}`
    },
    {
        header: 'log.txt file',
        content: `Logs the ${chalk.green('commands, params and results')} of the queries`
    }
]

const usage = commandLineUsage(sections)

module.exports = usage