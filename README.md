# LIRI Node App

A simple command line interface for calling APIs from Spotify, Bands in Town and OMDB

# API Keys

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

* **Step One:** Visit https://developer.spotify.com/my-applications/#!/
* **Step Two:** Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
* **Step Three:** Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
* **Step Four:** Create an .env file on the root folder and supply your Spotify ID and Secret:

    * SPOTIFY_ID=spotify_id
    * SPOTIFY_SECRET=spotify_secret

# Commands

* **-help**         - Display help information about the app.
* **concert-this**  - Queries the Bands in Town database to get the upcoming events for the artist/band.
* **movie-this**    - Queries the OMDB database to get the relevant movie information.
* **spotify-this**  - Queries the Spotify database to get the relevant song information.
* **random-this**   - Randomly performs of of the [concert-this, movie-this, spotify-this] operations, can be configured using random.txt file

# Random.txt file

Put each individual command in one line, the format of the command is:
**command,"param"**

# log.txt file

Logs the commands, params and results of the queries