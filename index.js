// constructor function
// function Person(firstName, lastName, age, isEmployed) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.isEmployed = isEmployed,
//     this.introduce = function() {
//         console.log(`My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and I am ${this.isEmployed ? "" : "not"} employed!`)
//     }
// }

class Person{
    static count = 0;

    constructor(firstName, lastName, age, isEmployed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isEmployed = isEmployed;
        Person.count++;
    }

    static logCount() {
        console.log(`There are ${Person.count} Persons online!`)
    }

    introduce() {
        console.log(`My name is ${this.firstName} ${this.lastName}.`)
        console.log(`I am ${this.age} years old and I am ${this.isEmployed ? "" : "not"} employed!`)
    }
}

let person1 = new Person("Patrick", "Taylor", 30, true)
let person2 = new Person("Tim", "Bitamo", 23, false)

let persons = [person1, person2]

persons.forEach(element => {
    element.introduce()
});

Person.logCount()