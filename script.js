const audio = document.getElementById("audio");
audio.addEventListener("timeupdate", function() {
  const progress = document.getElementById("progressbar");
  const value = (100 / audio.duration) * audio.currentTime;
  progress.style.transform = `scaleX(${value / 100})`;
});