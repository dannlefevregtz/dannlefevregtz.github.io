const audio = document.getElementById("audio-player");
const playPause = document.getElementById("play-pause");
const progress = document.getElementById("progressbar");

playPause.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
  } else {
    audio.pause();
    playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  }
});

audio.addEventListener("timeupdate", function() {
  const value = (100 / audio.duration) * audio.currentTime;
  progress.style.width = `${value}%`;
});
