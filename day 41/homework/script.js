let num1 = Number(prompt("Enter first number here"))
let num2 = Number(prompt("Enter second number here"))

const pr1 = document.querySelector("#p1");
const pr2 = document.querySelector("#p2");
const pr3 = document.querySelector("#p3");
const pr4 = document.querySelector("#p4");



pr1.textContent=pr1.textContent + " " + Number(num1 + num2)
pr2.textContent=pr2.textContent + " " + Number(num1 - num2)
pr3.textContent=pr3.textContent + " " + Number(num1 * num2)
pr4.textContent=pr4.textContent + " " + Number(num1 / num2)
