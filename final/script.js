
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("calcBtn");
  btn.addEventListener("click", runAll);
});

function addition(num) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${i} + ${num} = ${i + num}<br>`;
  }
  document.getElementById("addition").innerHTML = result;
}

function subtraction(num) {
  let result = "";
  let i = 1;
  while (i <= 10) {
    result += `${i} - ${num} = ${i - num}<br>`;
    i++;
  }
  document.getElementById("subtraction").innerHTML = result;
}

function multiplication(num) {
  let result = "";
  let i = 1;
  do {
    result += `${i} * ${num} = ${i * num}<br>`;
    i++;
  } while (i <= 10);
  document.getElementById("multiplication").innerHTML = result;
}

function division(num) {
  let result = "";
  if (num === 0) {
    // evitar Infinity y errores con toFixed
    for (let i = 1; i <= 10; i++) {
      result += `${i} / ${num} = undefined (division by 0)<br>`;
    }
  } else {
    for (let i = 1; i <= 10; i++) {
      result += `${i} / ${num} = ${(i / num).toFixed(2)}<br>`;
    }
  }
  document.getElementById("division").innerHTML = result;
}

function runAll() {
  const raw = document.getElementById("num").value;
  const num = parseFloat(raw);
  if (raw === "" || isNaN(num)) {
    alert("Por favor introduce un número válido.");
    return;
  }
  addition(num);
  subtraction(num);
  multiplication(num);
  division(num);
}
