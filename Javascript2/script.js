// Author: James Lee
// Date: October 29, 2025
// Project: JavaScript30 Clock Project (Improved)
// Source: Based on Wes Bos JavaScript30
// Improvements: Added digital clock, smoother transitions, and modern background

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.getElementById('digitalTime');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Prevent the second hand jump glitch
  if (seconds === 0) secondHand.style.transition = 'none';
  else secondHand.style.transition = '';

  // Digital clock display
  const formattedTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  digitalTime.textContent = formattedTime;
}

setInterval(setDate, 1000);
setDate();
