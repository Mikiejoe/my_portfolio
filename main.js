const image = document.getElementById('photo');
const title = document.getElementById('title');
const artist = document.getElementById('artist' );
const music = document.querySelector("audio");
const prevbtn = document.getElementById("prev");
const playbtn = document.getElementById("play");
const nextbtn = document.getElementById("next");

const songs = [
  {
    name: 'comeandgo', 
    displayName: 'Come and go',  
    artist: 'Ardee', 
  }, 
  {
    name: 'Nicki', 
    displayName: 'fly', 
    artist: 'Nicki ft Rihanna', 
  }, 
  {
    name: 'hardworkpaysoff', 
    displayName: 'Hardwork pays off', 
    artist: 'juice wrld ft future', 
  }, 
  {
    name: 'seious.mp3', 
    displayName: 'Serious', 
    artist: 'Nyashinski', 
  }, 
  {
    name: 'likethis', 
    displayName: 'Something like this', 
    artist: 'The Weekend', 
  }, 
  {
    name: 'myhand', 
    displayName: 'my hand', 
    artist: 'burna boy ft ed sheeran', 
  }, 
  ]

let isPlaying = false;

function playSong(){
  isPlaying = true;
  playbtn.innerText = '⏸️'
  music.play();
}

function pauseSong(){
  isPlaying = false;
  playbtn.innerText = '▶️'
  music.pause();
}

playbtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
var index = 4;
function changeSong(song){
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `/music/${song.name}.mp3`;
  image.src = `/images/${song.name}.jpg`;
}

function nextSong() {
  index +=1;
  changeSong(index);
  playSong();
  console.log(songs[index]);
}
function prevSong() {
  
  index--;
  changeSong(index);
  playSong();
  console.log(index);
} 
changeSong(songs[index]);
prevbtn.addEventListener('click', prevSong);
nextbtn.addEventListener('click', nextSong);
console.log(index)
