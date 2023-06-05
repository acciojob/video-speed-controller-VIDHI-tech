cy.visit("http://clips.vorwaerts-gmbh.de/VfE_html5.mp4");

cy.get("video")
  .should("have.prop", "paused", true)
  .and("have.prop", "ended", false)
  .and("have.prop", "duration", 60.08);

cy.get(".wrapper div")
  .should("exist") // Ensure the element exists
  .then(($div) => {
    // Perform further assertions or actions on the element if needed
    // For example, you can check its text or other properties
    // using Cypress commands or plain JavaScript assertions
    expect($div.text()).to.include("Expected Text");
  });

// // Get the necessary DOM elements
// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggleButton = player.querySelector('.toggle');
// const volumeSlider = player.querySelector('input[name="volume"]');
// const playbackRateSlider = player.querySelector('input[name="playbackRate"]');
// const skipButtons = player.querySelectorAll('[data-skip]');

// // Function to toggle play/pause
// function togglePlay() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// // Function to update the play/pause button text
// function updateButton() {
//   const icon = video.paused ? '►' : '❚ ❚';
//   toggleButton.textContent = icon;
// }

// // Function to handle volume change
// function handleVolumeChange() {
//   video.volume = volumeSlider.value;
// }

// // Function to handle playback rate change
// function handlePlaybackRateChange() {
//   video.playbackRate = playbackRateSlider.value;
// }

// // Function to skip the video by a specified duration
// function skip() {
//   const skipAmount = parseFloat(this.dataset.skip);
//   video.currentTime += skipAmount;
// }

// // Function to update the progress bar
// function updateProgress() {
//   const progressPercentage = (video.currentTime / video.duration) * 100;
//   progressBar.style.flexBasis = `${progressPercentage}%`;
// }

// // Event listeners
// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', updateProgress);

// toggleButton.addEventListener('click', togglePlay);

// volumeSlider.addEventListener('input', handleVolumeChange);
// playbackRateSlider.addEventListener('input', handlePlaybackRateChange);

// skipButtons.forEach(button => button.addEventListener('click', skip));

// progress.addEventListener('click', (e) => {
//   const progressWidth = progress.offsetWidth;
//   const clickX = e.offsetX;
//   const seekTime = (clickX / progressWidth) * video.duration;
//   video.currentTime = seekTime;
// });

// // Initial setup
// updateButton();
