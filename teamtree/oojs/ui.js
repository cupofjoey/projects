//playlist.js

function Playlist() {
  this.songs = [];
  this.noPlayingIndex = 0;
}

Playlist.prototype.add = function() {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentsong.play();
};

Playlist.prototype.stop = function(){
  var currentSong =     this.songs[this.nowPlayingIndex];
  currentsong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length) {
  this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
	list.innerHTML = "";
	for(var i = 0; i < this.songs.length; i++) {
		list.innerHTML += this.songs[i].toHTML();
	}
};


function Song(title, artist, duration) {
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function (){
	this.isPlaying = true;
};

Song.prototype.stop = function () {
	this.isPlaying = false;
};

Song.prototype.toHTML = function () {
	var htmlString = '<li';
	if(this.isPlaying){
		htmlString+= ' class="current"';
	}
	htmlString += 'class="current"';
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - ' 
	htmlString += this.artist;
	htmlString += '<span class="duraton">';
	htmlString += this.duration;
	htmlString += '</span></li>';
		return htmlString;
};









// ---------------Song------------


var playlist = new Playlist ();

var sabotage = new Song ("Sabotage", "The Beastie Boys", "2:54");
var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");

playlist.add(hereComesTheSun);
playlist.add(sabotage);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement();

var playButton = document.getElementById("play");
playButton.onclick = function(){
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function(){
	playlist.next();
	playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
	playlist.stop();
	playlist.renderInElement(playlistElement);
}


// ----------------Inheritance---------------


// Prototype Chains are gross

function Media(title, artist, duration) {
	Media.call(this, title, duration)
	this.artist = artist;
}
Song.prototype = Object.create(Media.prototype);

Media.prototype.toHTML = function () {
	var htmlString = '<li';
	if(this.isPlaying){
		htmlString+= ' class="current"';
	}
	htmlString += 'class="current"';
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - ' 
	htmlString += this.artist;
	htmlString += '<span class="duraton">';
	htmlString += this.duration;
	htmlString += '</span></li>';
		return htmlString;
};

//Movie.js

function Movie(title, year, duration) {
	Media.call(this, title, duration);
	this.year = year;
}

Movie.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function () {
	var htmlString = '<li';
	if(this.isPlaying){
		htmlString+= ' class="current"';
	}
	htmlString += 'class="current"';
	htmlString += '>';
	htmlString += this.title;
	htmlString += ' - ' 
	htmlString += this.artist;
	htmlString += '<span class="duration">';
	htmlString += this.duration;
	htmlString += '</span></li>';
		return htmlString;
};
















