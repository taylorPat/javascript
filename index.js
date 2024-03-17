// Nested objects

class Person {
    constructor(name, age, ...adresse) {
        this.name = name;
        this.age = age;
        console.log(typeof adresse, adresse)
        this.adresse = new Adresse(...adresse)
        console.log(typeof this.adresse, this.adresse)
    }
}

class Adresse {
    constructor(street, houseNumber, city) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
    }
}

const person = new Person("Patrick", 22, "Baker Street", 29, "Ratisbon")