const video = document.getElementById('video');
const btnPlay = document.getElementById('play');
const btnStop = document.getElementById('stop');
const btnVolume = document.getElementById('volume');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const volumeProgress = document.getElementById('volume-progress');
const btnFullscreen = document.getElementById('fullscreen');

function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

function updatePlayIcon() {
  video.paused ? btnPlay.innerHTML = '<i class="fa fa-play"></i>' : btnPlay.innerHTML = '<i class="fa fa-pause"></i>';
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function toggleVolume() {
  if (video.muted) {
    video.muted = false;
    btnVolume.innerHTML = '<i class="fa fa-volume-up"></i>';
  } else {
    video.muted = true;
    btnVolume.innerHTML = '<i class="fa fa-volume-off"></i>';
  }
}

function updateTime() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  mins < 10 ? mins = '0' + String(mins) : null

  let secs = Math.floor(video.currentTime % 60);
  secs < 10 ? secs = '0' + String(secs) : null

  timestamp.innerText =`${mins}:${secs}`;
}

function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

function setVolumeProgress() {
  video.volume = volumeProgress.value;
  (video.volume === 0) ? btnVolume.innerHTML = '<i class="fa fa-volume-off"></i>' : btnVolume.innerHTML = '<i class="fa fa-volume-up"></i>'
}

function toggleScreenSize() {
  video.requestFullscreen();
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateTime);

btnPlay.addEventListener('click', toggleVideoStatus);
btnStop.addEventListener('click', stopVideo);
btnVolume.addEventListener('click', toggleVolume);

progress.addEventListener('change', setVideoProgress);
volumeProgress.addEventListener('change', setVolumeProgress);

btnFullscreen.addEventListener('click', toggleScreenSize);