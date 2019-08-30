

// this is for spotify 
// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: b660b9d15cf64d169086feeee9c25eaa,
  secret: 6b27fc3404eb4d0a91648c6870b7e361
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});