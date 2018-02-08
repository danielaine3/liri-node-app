require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var twitter = require('twitter');
var command = process.argv[2];

var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitter);

// function commandChange(command, response) {
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
// };

//===============TWEETS==============================
function getTweets(count) {
	// var twitterUsername = process.argv[3];
	var params = {screen_name: 'DaniCarter3', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error && response.statusCode ===200) {
			console.log("----------------------");
			var data = [];
			for (var i = 0; i < tweets.length; i++) {
				console.log('created at: ' + tweets[i].created_at);
				console.log('Tweets: ' + tweets[i].text);
			};		
		};
	});
};

//=================SPOTIFY=====================================
var song = function(artist, song, album, preview) {
	this.artist = artist;
	this.song = song;
	this.album = album;
	this.preview = preview;
};

function spotifyThis(songName) {
	var songName = process.argv[3];
	if (songName == null) {
		songName = "The Sign";
		console.log("You didn\'t input a song.");
		console.log("So we picked: " + songName + " for you.");
	};

	spotify.search({
		type: 'track', query: songName,limit: '1'}, function(err, data) {
		if (err) {
			return console.log('Error occured: ' + err);
		}

		var songResponse = data.tracks.items;
		// var songArray = []
		for (var i = 0; i < songResponse.length; i++) {
			if (songResponse [i] != undefined) {

				var newSong = new song (
					songResponse[i].artists[0].name,
					songResponse[i].name,
					songResponse[i].album.name,
					songResponse[i].preview_url);

				// songArray.push(newSong);
				console.log(newSong);
			}
		}
	});
};

//=======================Movie This===========================
function movieThis(movieName) {
	if (movieName == null) {
		movieName = 'Mr. Nobody';
		console.log("You didn\'t input a movie.");
		console.log("So we picked: " + movieName + " for you.")
	};
	var queryURL = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';
	request.get(queryURL, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("-----------------------")
			var movieResponse = JSON.parse(body);
			console.log("Title: " + movieResponse.Title);
			console.log("Year released: " + movieResponse.Year);
			console.log("IMDB rating: " + movieResponse.imdbRating);
			for (var i = 0; i < movieResponse.Ratings.length; i++) {
				if (movieResponse.Ratings[i].Source === 'Rotten Tomatoes') {
					console.log("Rotten Tomatoes Rating: " + 
						movieResponse.Ratings[i].Value);
				};
			};
			console.log("Production country: " + movieResponse.Country);
			console.log("Language: " + movieResponse.Language);
			console.log("Plot: " + movieResponse.Plot);
			console.log("Actors: " + movieResponse.Actors);
		};	
	});
};

//===================DO WHAT IT SAYS====================================
function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		var dataArr = data.split(',');
		commandChange(array[0], array[1])

		// if (dataArr.legnth == 2) {
		// 	pick(dataArr[0]. dataArr[1]);
		// } else if (dataArr.length == 1) {
		// 	pick(dataArr[0]);
		// }
	});
};

//======================WRITE TO LOG================================
// function writeToLog(data) {
// 	fs.appendFile("log.txt", '\r\n\r\n');

// 	fs.appendFile("log.txt", JSON.stringify(data), function(err){
// 		if (err) {
// 			return console.log(err);
// 		}
// 		console.log("log.text was updated!");
// 	});
// };

//Add writeToLog(data) to end of functions for bonus

//========================INSTRUCTIONS================================





