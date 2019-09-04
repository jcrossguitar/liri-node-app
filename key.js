

// this is for spotify 
// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);


var Spotify = require('node-spotify-api');

var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var search = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    search = search + "+" + nodeArgs[i];
  } else {
    search += nodeArgs[i];

  }
}
 
var spotify = new Spotify({
  id: "b660b9d15cf64d169086feeee9c25eaa",
  secret: "6b27fc3404eb4d0a91648c6870b7e361"
});

var getArtistNames = function (artist) {
    return artist.name;
}

 
spotify
    .search({ type: 'track', query: search }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 

var songs = data.tracks.items;
for (var i = 0; i < songs.length; i++) {
    console.log(i);
    console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
    console.log('song name: ' + songs[i].name);
    console.log('preview song: ' + songs[i].preview_url);
    console.log('album: ' + songs[i].album.name);
    console.log('----------------------------------------------------------');
}
});

// above /\ this code works!!

// var concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


