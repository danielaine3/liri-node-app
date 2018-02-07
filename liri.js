require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('spotify');
var Twitter = require('client');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

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

function getTweets() {

};

function spotifyThis(songName) {
	if (songName === " ") {
		songName = "Revolution"
	};

	var queryURL = 'http://api.spotify.com/v1/search/q=track'+songName

	console.log(response)};

	var spotifyResponse = JSON.parse(body);
	console.log("Artist(s): " +);
	console.log("Song Name: " +);
	console.log("Spotify Preview: " +);
	console.log("Album: " + )
};

function movieThis(title) {
	if (movieName == " ") {
		movieName = 'Mr. Nobody';
	};
	var queryURL = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';

	request(queryURL, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("-----------------------")
			console.log("Request complete.");

		
			var movieResponse = JSON.parse(body);
			console.log("Title: " + movieResponse.Title);
			console.log("Year released: " + movieResponse.Year);
			console.log("IMDB rating: " + movieResponse.imdbRating);
			console.log("Rotten Tomatoes Rating: " + movieResponse.Ratings);
			console.log("Production country: " + movieResponse.Country);
			console.log("Language: " + movieResponse.Language);
			console.log("Plot: " + movieResponse.Plot);
			console.log("Actors: " + movieResponse.Actors);
		};	
	});
};

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		console.log(data);
		writeToLog(data);
		// var dataArr = data.split(',');
	})
}
