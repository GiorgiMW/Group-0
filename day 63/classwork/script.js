function Person(name,lastname,age,print){
    this.name = name
    this.lastname = lastname
    this.age = age
    this.print = print
}

const printAll = function(){
    return this.name + " " + this.lastname + " " + this.age
}

const info = new Person("Giorgi","Motsonelidze","16",printAll)
console.log(info.print())