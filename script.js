document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.flex');
  const progressBar = document.querySelector('.progress__filled');
  const playButton = document.querySelector('.player__button');
  const volumeSlider = document.querySelector('input[name="volume"]');
  const playbackSpeedSlider = document.querySelector('input[name="playbackRate"]');
  const skipButtons = document.querySelectorAll('.skip__button');

  // Play or pause the video
  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Update the play button icon
  function updatePlayButton() {
    playButton.textContent = video.paused ? '►' : '❚ ❚';
  }

  // Update the progress bar
  function updateProgress() {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
  }

  // Skip forward or backward in the video
  function skip() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
  }

  // Set the volume of the video
  function setVolume() {
    video.volume = this.value;
  }

  // Set the playback speed of the video
  function setPlaybackSpeed() {
    video.playbackRate = this.value;
  }

  // Event listeners
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updatePlayButton);
  video.addEventListener('pause', updatePlayButton);
  video.addEventListener('timeupdate', updateProgress);

  playButton.addEventListener('click', togglePlay);

  volumeSlider.addEventListener('input', setVolume);
  playbackSpeedSlider.addEventListener('input', setPlaybackSpeed);

  skipButtons
