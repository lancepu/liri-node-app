const spotify = require('node-spotify-api')
const keys = require('./keys')
const formatResponse = require('./formatResponse')

const mySpotify = new spotify(keys.spotify)

module.exports = function spotifyThis(song){
    mySpotify.search({type: 'track', query: song, limit: 1})
        .then(response => {
            formatResponse('Song: ', response.tracks.items[0].name)
            formatResponse('Artists: ', response.tracks.items[0].artists[0].name)
            formatResponse('Album: ', response.tracks.items[0].album.name)
            formatResponse('Preview URL: ', response.tracks.items[0].preview_url)
        })
        .catch(err => {
            console.log(err)
        })
    
}
