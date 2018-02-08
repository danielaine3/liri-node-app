require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var request = require('request');
// var Spotify = require('spotify');
// var Twitter = require('client');


// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var command = process.argv[2];
switch (command) {
	case 'my-tweets':
		getTweets();
		break;

	case "spotify-this-song":
		var songName = process.argv[3];
		spotifyThis(songName);
		break;

	case 'movie-this':
		var movieName = process.argv[3];
		movieThis(movieName);
		break;

	case 'do-what-it-says':
		doWhatItSays();
		break;
	default:
		console.log("LIRI doesn't know that");
};

// function getTweets() {
// 	var param = {screen_name: '', count: 20};

// 	client.get('statuses/user_timeline', param, function(error, tweets, response) {
// 		if (!error) {
// 			var data =[];
// 			for (var i = 0; i < tweets.length; i++){
// 				data.push({
// 					'created at: ' : tweets[i].created_at,
// 					'Tweets:' : tweets[i].text,
// 				});
// 			}
// 			console.log(data);
// 			writeToLog(data);
// 		}
// 	});

// };


function spotifyThis(songName) {
	if (songName === " ") {
		songName = "Revolution"
	};

	spotify.search({type: 'track', query: SongName}, function(err, data){
		if (err) {
			console.log('Error occured: ' + err);
			return;
		}
		var songs = data.tracks.items;
		var data = [];

		for(var i = 0; i <songs.length; i++) {
			data.push({
				'Artist(s)': songs[i].artists.map(getArtistName),
				'Song Name': songs[i].name,
				'Spotify Preview': songs [i].preview_url.
				'Album': songs[i].album.name,
			});
		}
		console.log(data);
		writeToLog(data);

	});
	var queryURL = 'http://api.spotify.com/v1/search/q=track'+songName

	console.log(response)};

// 	var spotifyResponse = JSON.parse(body);
// 	console.log("Artist(s): " + spotifyResponse.);
// 	console.log("Song Name: " + spotifyResponse.);
// 	console.log("Spotify Preview: " + spotifyResponse.);
// 	console.log("Album: " + spotifyResponse.)
// };

// function movieThis(title) {
// 	if (movieName == null) {
// 		movieName = 'Mr. Nobody';
// 	};
// 	var queryURL = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';

// 	request.get(queryURL, function(error, response, body) {
// 		if (!error && response.statusCode === 200) {
// 			console.log("-----------------------")
// 			var movieResponse = JSON.parse(body);
// 			console.log("Title: " + movieResponse.Title);
// 			console.log("Year released: " + movieResponse.Year);
// 			console.log("IMDB rating: " + movieResponse.imdbRating);
// 			for (var i = 0; i < movieResponse.Ratings.length; i++) {
// 				if (movieResponse.Ratings[i].Source === 'Rotten Tomatoes') {
// 					console.log("Rotten Tomatoes Rating: " + 
// 						movieResponse.Ratings[i].Value);
// 				};
// 			};
// 			console.log("Production country: " + movieResponse.Country);
// 			console.log("Language: " + movieResponse.Language);
// 			console.log("Plot: " + movieResponse.Plot);
// 			console.log("Actors: " + movieResponse.Actors);
// 		};	
// 	});
// };

// function doWhatItSays() {
// 	fs.readFile("random.txt", "utf8", function(error, data) {
// 		console.log(data);
// 		writeToLog(data);
// 		// var dataArr = data.split(',');
// 	})
// }
