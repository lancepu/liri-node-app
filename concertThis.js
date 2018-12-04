const axios = require('axios')
const formatResponse = require('./formatResponse')
const moment = require('moment')

module.exports = function concertThis(artist){
    const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(URL)
        .then((response) => {
            if (response.data.length > 1){
                for (i = 0; i < response.data.length; i++){
                    formatResponse("Event Lineup: ", response.data[i].lineup)
                    formatResponse("Event Venue: ", response.data[i].venue.name)
                    formatResponse("Event Location: ", response.data[i].venue.city)
                    formatResponse("Event Date: ", moment(response.data[i].datetime, moment.ISO_8601).format('MM/DD/YYYY'))
                    console.log("-----------------------------------")
                }
            }
            else {
                console.log(`No upcoming event found for ${artist}`)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}
