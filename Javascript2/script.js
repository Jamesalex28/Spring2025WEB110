// Name: James Lee
// Date: 10/29/2025
// Project: JavaScript30 Clock
// Source: Based on Wes Bos JavaScript30
// Improvements: Added digital clock

// Select the clock hand and the digital div
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.getElementById('digitalTime');

// Main function to update the clock
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Digital hour
  digitalTime.textContent = now.toLocaleTimeString();
}

setDate();
setInterval(setDate, 1000);
