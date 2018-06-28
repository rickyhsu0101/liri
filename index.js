require("dotenv").config();
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const fs = require("fs");
const request = require("request");
function getTweets(){
  let client = new Twitter(keys.twitter);
  client.get("statuses/user_timeline", {count: 20},function (error, tweets, response) {
    tweets.forEach(element => {
      console.log(`Created:\t${element.created_at}`);
      console.log(`Text:\t\t${element.text}`);
      console.log();
    });
  });
}
function getSong(title){
  let spotify = new Spotify(keys.spotify);
  spotify.search({type: "track", query: title}, function(err, data){
    if(err){
      return console.log(err);
    }
    if(data.tracks.items.length != 0){
      data.tracks.items.forEach(element => {
        let artists = []
        element.album.artists.forEach(artist => {
          artists.push(artist.name);
        });
        let albumName = element.album.name;
        let name = element.name;
        let preview = element.preview_url;
        //console.log(artists);
        console.log(`Artist:\t\t${artists.join(", ")}`);
        console.log(`Album:\t\t${albumName}`);
        console.log(`Name:\t\t${name}`);
        console.log(`Preview:\t${preview}`);
        console.log();
      });
    }else{
        getSong("The Sign");
    }
  });
}
function getMovie(title){
  request(`http://www.omdbapi.com/?apikey=trilogy&t=${title}&r=json`, function (err, response, body) {
    if(err){
      console.log(err);
    }
    let data = JSON.parse(body);
    console.log(`Title:\t\t\t${data.Title}`);
    console.log(`Year:\t\t\t${data.Year}`);
    data.Ratings.forEach(element=>{
      if(element.Source == "Internet Movie Database"){
        console.log(`IMDB Rating:\t\t${element.Value}`);
      }
      if(element.Source == "Rotten Tomatoes"){
        console.log(`Rotten Tomatoes Rating:\t${element.Value}`);
      }
    });
    console.log(`Country:\t\t${data.Country}`);
    console.log(`Language:\t\t${data.Language}`);
    console.log(`Plot:\t\t\t${data.Plot}`);
    console.log(`Actors:\t\t\t${data.Actors}`);
  });
}
function read(){
  fs.readFile("random.txt", "utf8",function(err, data){
    if(err){
      return console.log(err);
    }
    console.log(data);
    const dataArray = data.split(",");
    process.argv[2] = dataArray[0];
    if(dataArray.length==2)
      process.argv[3] = dataArray[1];
    run();
  });
}
function run(){
  switch(process.argv[2]){
    case "my-tweets":
      getTweets();
      break;
    case "spotify-this-song":
      process.argv.splice(0,3);
      getSong(process.argv.join(" "));
      break;
    case "movie-this":
      process.argv.splice(0,3);
      getMovie(process.argv.join(" "));
      break;
    case "do-what-it-says":
      read();
      break;
    default:
      console.log("not valid command");
  };
}
run();