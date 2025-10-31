document.getElementById("calcBtn").addEventListener("click", runAll);

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
  for (let i = 1; i <= 10; i++) {
    result += `${i} / ${num} = ${(i / num).toFixed(2)}<br>`;
  }
  document.getElementById("division").innerHTML = result;
}

function runAll() {
  const num = parseFloat(document.getElementById("num").value);
  if (isNaN(num)) {
    alert("Please enter a number!");
    return;
  }
  addition(num);
  subtraction(num);
  multiplication(num);
  division(num);
}
