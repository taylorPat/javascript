class Animal {
    constructor(name, superPower) {
        this.name = name
        this.superPower = superPower
    }
    eat() {
        console.log(`The ${this.name} is eating`)
    }
    convertSuperPower(callback) {
        console.log(`Convert ${this.superPower} to Potatos with ${this.logSpeed()}! ${callback()}`)
    }
    logSpeed() {
        return `${this.speed} miles per hour`
    }
}

class Frog extends Animal {
    constructor(name, superPower, jumpingSpeed) {
        super(name, superPower)
        this.speed = jumpingSpeed
    }

    jump() {
        return `The frog is jumping!`
    }

    convertSuperPower() {
        super.convertSuperPower(this.jump)
    }
}

const frog = new Frog("Frog", "Bananas", 25);
frog.eat()
frog.jump()
frog.convertSuperPower()