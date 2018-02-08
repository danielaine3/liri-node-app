require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('spotify');
var twitter = require('twitter');
var command = process.argv[2];

switch (command) {
	case 'my-tweets':
		getTweets();
		break;

	case "spotify-this-song":
		var songName = process.argv[3];
		spotifyThis();
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

//===============TWEETS==============================
function getTweets() {
	var data = [];
	var client = new twitter(keys.twitter);
	var params = {screen_name: twitterUsername, count: 20};
	var twitterUsername = process.argv[3];
	if (twitterUsername == null) {
		twitterUsername = 'DaniCarter3'
	};

	client.get('statuses/user_timeline', params, function(error, data, response) {
		if (!error && response.statusCode ===200) {
			console.log("----------------------");
			for (var i = 0; i < data.length; i++) {
				data.push({
					'created at: ' : data[i].created_at,
					'Tweets: ' : data[i].text,
				});
			};
			console.log(twitterUsername);
			console.log(response);			
		};
	});
};

//=================SPOTIFY=====================================
function spotifyThis(songName) {
	var data = [];
	var spotify = new Spotify(keys.spotify);
	if (songName == null) {
		songName = "Revolution"
	};

	spotify.search({
		type: 'track', 
		query: SongName + '&limit=1&'
	}, function(error, data){
		if (!error && response.statusCode ===200) {
			console.log("----------------------");
			for (var i = 0; i < songs.length; i++) {
				data.push({
					'artist(s): ' :songs[i].artists.map(getArtistsNames),
					'song name: ' :songs[i].name,
					'preview song: ' : songs[i].preview_url,
					'album: ' : songs[i].album.name,
				});
				console.log(data);
			};
		};
	});
};

//=======================Movie This===========================
function movieThis(title) {
	if (movieName == null) {
		movieName = 'Mr. Nobody';
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
		data = data.split(',');
		var command;
		var parameter;

		if (data.length == 2) {
			command = data[0];
			parameter = data [1];
		}
		parameter = parameter.replace('"', '');
		parameter = prarameter.replace('"', '');

		switch (command) {
			case 'my-tweets':
			value = parameter;
			getTweets();
			break;

			case 'spotify-this-song':
			value = parameter;
			spotifyThis();
			break;

			case 'movie-this' :
			value = parameter;
			movieThis(movieName);
			break;
		}
	});
};



