const axios = require('axios')
const formatResponse = require('./formatResponse')

function movieThis(movie){
    const URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"
    axios.get(URL)
        .then((response) => {
            formatResponse("Title: ", response.data.Title)
            formatResponse("Year: ", response.data.Year)
            formatResponse("IMDB Rating: ", response.data.imdbRating)
            for (i = 0; i < response.data.Ratings.length; i++){
                if (response.data.Ratings[i].Source === "Rotten Tomatoes") formatResponse("Rotten Tomatoes Rating: ", response.data.Ratings[i].Value)
            }
            formatResponse("Country: ", response.data.Country)
            formatResponse("Language: ", response.data.Language)
            formatResponse("Plot: ", response.data.Plot)
            formatResponse("Actors: ", response.data.Actors)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = movieThis