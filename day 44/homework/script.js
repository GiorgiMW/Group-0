function nums(){
    let num1 = Number(prompt("Enter first number here: "))
    let num2 = Number(prompt("Enter second number here: "))
    let num3 = Number(prompt("Enter third number here: "))
    alert("The sum is " + String(num1 + num2 + num3))
};
nums();

const pr = document.querySelector("#p1");
const buttons = document.querySelector("#btn");
const buttons2 = document.querySelector("#btn2")

buttons.addEventListener("click", function(){
    pr.textContent="JavaScript";
    pr.style.fontSize = "30px";
    pr.style.color = "red";
});

buttons2.addEventListener("click", function(){
    pr.textContent="Hello";
    pr.style.fontSize = "16px";
    pr.style.color = "black";
});