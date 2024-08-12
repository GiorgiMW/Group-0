// calculator = {
//     plus: function(num1,num2){
//         return num1 + num2
//     },
//     minus: function(num1,num2){
//         return num1 - num2
//     },
//     multiple: function(num1,num2){
//         return num1 * num2
//     },
//     divide: function(num1,num2){
//         return num1 / num2
//     }
// }

// console.log(calculator.plus(3,4));
// console.log(calculator.minus(2,7));
// console.log(calculator.multiple(6,4));
// console.log(calculator.divide(1,6));


const button = document.querySelector("#btn");

function Calculators(num1,num2,operator){
    if (operator === "+"){
        return num1 + num2
    }
    else if (operator === "-"){
        return num1 - num2
    }
    else if (operator === "*"){
        return num1 * num2
    }
    else if (operator === "/"){
        return num1 / num2
    } else{
        return "Wrong Operator"
    }
}
prompt1 = Number(prompt("Enter first number here: "))
prompt2 = Number(prompt("Enter second number here: "))
prompt3 = prompt("Enter operator number here: ")

const h2 = document.createElement("h2");
h2.textContent = Calculators(prompt1,prompt2,prompt3)
document.body.appendChild(h2);
button.addEventListener("click", () => {
    h2.style.display = "none";
})