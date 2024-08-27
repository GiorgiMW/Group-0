input = Number(prompt("How many tickects you want to buy?: "))

const array = []

const Object = function(name,lastname,age,id){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
}

for(let i = 0;i < input; i++){
    nameInput = prompt("Enter your name here: ")
    lastnameInput = prompt("Enter your lastname here: ")
    ageInput = prompt("Enter you age here: ")
    idRandom = Math.round(Math.random() * 50)

    const tickectsObject = new Object(nameInput,lastnameInput,ageInput,idRandom)


    array.push(tickectsObject)
}

console.log(array)