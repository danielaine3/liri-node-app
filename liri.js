require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var request = require('request');
var Spotify = require('spotify');
var Twitter = require('client');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

request("http://www.omdbapi.com/?t=" + media + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
	if (!error && response.statusCode === 200) {
		console.log("Request complete.");
	};
});


var command = process.argv[2];
var media = process.argv[3];

if (command === "my-tweets") {
	var queryURL=""
}


else if (command === "spotify-this-song") {
	var 
}

else if (command === "movie-this") {

}

else if (command === "do-what-it-says") {

}