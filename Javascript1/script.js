/*
Name: James Lee
Date: 27/10/25
Source: Wes Bos JavaScript30 - Drum Kit Project
Notes: Modified for WEB124 - JCCC
*/

// Add a small visual alert
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop if no key
  audio.currentTime = 0; // rewind
  audio.play();
  key.classList.add("playing");

    console.log(`You pressed: ${e.key.toUpperCase()}`);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
