/*
Name: James Lee
Date: October 29, 2025
*/

// 1. Create a string variable with your name
let myName = "James Lee";

// 2. Change paragraph 1 text to your name
let para1 = document.getElementById("p1");
para1.textContent = myName;

// 3. Create and initialize two numbers
let n1 = 8;
let n2 = 4;

// 4. Add the two numbers
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// 5. Multiply the two numbers
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// 6. Add string + number
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// 7. Multiply string * number
let myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

// 8. Compare your age to multiplication result
let myAge = 25;
let ageCompare = myAge > numberMult;
document.getElementById("p6").textContent = ageCompare;
