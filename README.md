# LIRI BOT

### Overview
This application is a Language Interpretation and Recognition Interface to access different information via different API's.

### Setup

Creat a .env file for SPOTIFY_ID, SPOTIFY_SECRET, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_ACCESS_TOKEN_KEY, and TWITTER_ACCESS_TOKEN_SECRET with the respective values generated from the API websites for Twitter and Spotify.

### Usage

##### Twitter

The Twitter functionality is to gather 20 most recent tweets from the user which the API Keys and other sensitive identification is generated from. 

The respective command-line code:

```
node index.js my-tweets
```

Example output:

```
Created:        Thu Jun 28 18:23:09 +0000 2018
Text:           Second Tweet

Created:        Thu Jun 28 18:23:02 +0000 2018
Text:           First Tweet
```
##### Spotify

The Spotify functionality takes in an environment parameter representing the title and make a `GET` request using the spotify api to gather a list of results associated with the query.

The respective command-line code:

```
node index.js spotify-this-song <song-title>
```

Example Input and Output:

```
node index.js spotify-this-song I Want it That Way
```

```
Artist:         Backstreet Boys
Album:          The Hits--Chapter One
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Backstreet Boys
Album:          Millennium
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/b8c2410a5acb68b462be6ac85f1312430e2b149c?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Backstreet Boys
Album:          The Essential Backstreet Boys
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/f9f504a705fcaaf2f24b004b629725451014ad6c?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Anthem Lights
Album:          Covers Part IV
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/4a163fbfa2dbbe4433f277e0e7395dca656364f5?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Glee Cast
Album:          Bye Bye Bye / I Want It That Way (Glee Cast Version)
Name:           Bye Bye Bye / I Want It That Way (Glee Cast Version)
Preview:        https://p.scdn.co/mp3-preview/3aa63b5c98b98ae333e567813e5c720abb2914f0?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Manuel Costa
Album:          I Want It That Way
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/cdde86f49ca4ef217ac08bbbb0c6295c16f015b0?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         "Weird Al" Yankovic
Album:          Poodle Hat
Name:           Ebay (Parody of "I Want It That Way" by the Backstreet Boys)
Preview:        https://p.scdn.co/mp3-preview/e217ea111ab84a777f204252fce4b18d5de3ae80?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Various Artists
Album:          90 Sweet 90s Hits!
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/2f96341eb8415a3efb27375db1c4d59928408c2f?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Various Artists
Album:          Punk Goes Pop
Name:           I Want It That Way
Preview:        null

Artist:         Steel Panther
Album:          I Want It That Way
Name:           I Want It That Way
Preview:        null

Artist:         Boyce Avenue
Album:          Cover Sessions, Vol. 2
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/764f1dcb8c9a9cec099cc361cb388f931bf023d3?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Kyle Olthoff
Album:          I Want It That Way
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/101776fe4fc24aac543f6b4c5aa4273ac9d2dcc4?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Landon Austin, Julia Sheer
Album:          I Want It That Way
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/e777be5446dc3df34abc2eaec241edb5a590976c?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         "Weird Al" Yankovic
Album:          The Essential "Weird Al" Yankovic
Name:           Ebay (Parody of "I Want It That Way" by the Backstreet Boys)
Preview:        https://p.scdn.co/mp3-preview/5632d8e302d70afaa8f79c962aa4b2032a45b3ef?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         NKOTBSB, New Kids On The Block, Backstreet Boys
Album:          NKOTBSB
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/adf2485de3f3f375593b5307a792e8d8e6f19794?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Scary Pockets
Album:          Nu Funk
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/33685e005149d5e7d0199a764163ff77f7762e29?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Jason Chen, Joseph Vincent
Album:          I Want It That Way
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/cba62099b5bec2bc9244aaeaba0422556f6df04e?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Various Artists
Album:          NOW That's What I Call 90s Pop
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/c9302062adf4f59e60335f30c7ca46b487a267fb?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         Scott Bradlee's Postmodern Jukebox
Album:          Selfies on Kodachrome
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/53296f4b689baaa0be6d94e8720c044e98d4b3e3?cid=c036d3463f0744798f1220c8d3ca5807

Artist:         FROIDZ
Album:          I Want It That Way
Name:           I Want It That Way
Preview:        https://p.scdn.co/mp3-preview/fdf46a47cbaf363ff9379b4222a74d1ba8291b67?cid=c036d3463f0744798f1220c8d3ca5807

```

##### OMDB

The OMDB functionality also takes in a parameter from the environment as the title of the movie. Using a `GET` request, it gathers one result closests to the user-inputted title.

The respective command-line code:

```
node index.js movie-this <movie-title>
```

Example output:

```
Title:                  Deadpool
Year:                   2016
IMDB Rating:            8.0/10
Rotten Tomatoes Rating: 83%
Country:                USA
Language:               English
Plot:                   A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.
Actors:                 Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer
```

##### Pre-written commands

These above functionalities can also be accessed through pre-written command in the `random.txt` file. However, only one command can be written.

File format:

```
<command>,<parameter if any>
```

Example Input:

```
spotify-this-song,I Want it That Way
```
