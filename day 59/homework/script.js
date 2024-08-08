calculator = {
    plus: function(num1,num2){
        return num1 + num2
    },
    minus: function(num1,num2){
        return num1 - num2
    },
    multiple: function(num1,num2){
        return num1 * num2
    },
    divide: function(num1,num2){
        return num1 / num2
    }
}

console.log(calculator.plus(3,4));
console.log(calculator.plus(2,7));
console.log(calculator.plus(6,4));
console.log(calculator.plus(1,6));

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
console.log(Calculators(prompt1,prompt2,prompt3))