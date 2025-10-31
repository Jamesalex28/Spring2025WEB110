/*
Name: [Tu Nombre]
Date: October 30, 2025
Source: Wes Bos JavaScript30 "Custom Video Player"
Notes: I added keyboard shortcuts (space = play/pause, arrows to skip)
and improved progress bar interactions.
*/

// select elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Play or pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// icon change
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// skip
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Speed and volume
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// actualice progress
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// advance with the click
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// personalized short cuts
function handleKeyControls(e) {
  if (e.code === 'Space') {
    e.preventDefault();
    togglePlay();
  } else if (e.code === 'ArrowRight') {
    video.currentTime += 10;
  } else if (e.code === 'ArrowLeft') {
    video.currentTime -= 10;
  }
}

// Events
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

document.addEventListener('keydown', handleKeyControls);
