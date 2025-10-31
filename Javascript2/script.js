// Author: James Lee
// Date: 10/29/2025
// Project: JavaScript30 Clock Project (Improved)
// Source: Based on Wes Bos JavaScript30
// Improvements: Added digital clock, smoother transitions, and modern background

(function () {
  'use strict';

  // Esperar que el DOM esté listo para asegurar que querySelector encuentre elementos.
  window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired — script cargado.');

    const status = document.getElementById('status');
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const digitalTime = document.getElementById('digitalTime');

    // Reportar si los elementos fueron encontrados
    console.log('secondHand:', secondHand);
    console.log('minHand:', minHand);
    console.log('hourHand:', hourHand);
    console.log('digitalTime:', digitalTime);

    // Si algún elemento es null, avisar y no seguir para evitar errores.
    if (!secondHand || !minHand || !hourHand || !digitalTime) {
      const missing = [];
      if (!secondHand) missing.push('second-hand');
      if (!minHand) missing.push('min-hand');
      if (!hourHand) missing.push('hour-hand');
      if (!digitalTime) missing.push('digitalTime');
      const msg = 'ERROR: faltan elementos en el DOM: ' + missing.join(', ');
      console.error(msg);
      if (status) status.textContent = 'Estado: error — revisa la consola (F12). ' + msg;
      return;
    }

    // Si todo está bien, actualizar el estado visible
    if (status) status.textContent = 'Estado: JavaScript ejecutándose correctamente.';

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

      // evitar "salto" al reiniciar segundos
      if (seconds === 0) secondHand.style.transition = 'none';
      else secondHand.style.transition = '';

      // Hora digital
      digitalTime.textContent = now.toLocaleTimeString();
    }

    // iniciar y asegurar llamada inmediata
    setDate();
    window.setInterval(setDate, 1000);
    console.log('Reloj iniciado: setInterval configurado.');
  });
})();
