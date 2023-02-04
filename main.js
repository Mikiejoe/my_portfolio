const image = document.getElementById('photo');
const title = document.getElementById('title');
const artist = document.getElementById('artist' );
const music = document.querySelector("audio");
const prevbtn = document.getElementById("prev");
const totalTime = document.getElementById("total");
const elapsedTime = document.getElementById("elapsed");
const playbtn = document.getElementById("play");
const nextbtn = document.getElementById("next");
const progressContainer = document.getElementById("progress");
const progress = document.getElementById("progress-bar");

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
    name: 'serious', 
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
var index = 0;
function changeSong(song){
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `/music/${song.name}.mp3`;
  image.src = `/images/${song.name}.jpg`;
  
}

function nextSong() {
  index +=1;
  if(index<songs.length){
  
  } else{
    index=0;
  } 
  changeSong(songs[index]);
  playSong();
}
function prevSong() {
  
  index--;
  if(index<0){
    index=(songs.length-1)
  }
  changeSong(songs[index]);
  playSong();
  
} 

function updateTime(e){
  if(isPlaying){
    const {duration, currentTime} = e.srcElement;
    const percent = (currentTime/duration)*100;
    progress.style.width = `${percent}%`;
    const totalMinutes = Math.floor(duration/60);
    let totalSeconds = Math.floor(duration%60);
    if(totalSeconds<10){
      totalSeconds = `0${totalSeconds}`;
    }
    if(totalMinutes){
    totalTime.textContent = `${totalMinutes}:${totalSeconds}`;} 
    const elapsedMinutes = Math.floor(currentTime/60);
    let elapsedSeconds = Math.floor(currentTime%60);
    if(elapsedSeconds<10){
      elapsedSeconds= `0${elapsedSeconds}`;
    }
    elapsedTime.textContent = `${elapsedMinutes}:${elapsedSeconds}`;
  }
}

changeSong(songs[index]);
prevbtn.addEventListener('click', prevSong);
nextbtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateTime);

