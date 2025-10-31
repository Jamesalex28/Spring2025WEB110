/*
Project: JavaScript30 Countdown Timer (Improved)
Student: James Lee
Date: 30/10/2025
Source: Based on Wes Bos JavaScript30
Improvements: Added input validation, reset button, dynamic countdown, and alerts.
Challenging/learning points: Managing intervals, formatting time, and updating the DOM in real time.
*/

let countdown;
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const inputMinutes = document.getElementById('inputMinutes');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Start the countdown timer
function startTimer() {
  clearInterval(countdown); // Clear any existing countdown

  let totalSeconds = parseInt(inputMinutes.value) * 60;
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert('Ingresa un número válido de minutos');
    return;
  }

  countdown = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      alert('¡Tiempo terminado!');
    } else {
      totalSeconds--;
    }
  }, 1000);
}

// Reset the countdown timer
function resetTimer() {
  clearInterval(countdown);
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  inputMinutes.value = '';
}

// Event listeners
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
