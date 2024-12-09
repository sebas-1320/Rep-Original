const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const volumeBtn = document.getElementById('volume');
const progress = document.getElementById('progress');

// Play the audio
playBtn.addEventListener('click', () => {
  audio.play();
});

// Pause the audio
pauseBtn.addEventListener('click', () => {
  audio.pause();
});

// Toggle mute/unmute
volumeBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
});

// Seek functionality
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});