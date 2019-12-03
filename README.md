# liri-node-app

use this node app as a way to look up music and movies with omdb
use these commands to search the resources

1. `node liri.js concert-this <artist/band name here>`

    the search results should yield

    * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`
    
    the search results should yield

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

3. `node liri.js movie-this '<movie name here>'`

    the search results should yield

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

4. `node liri.js do-what-it-says`

    this should search the song "I Want it That Way"
