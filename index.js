let MIN = 20
let MAX = 100

let random = Math.floor(Math.random() * (MAX - MIN)) + MIN
//console.log(random)

let attempts = 0
let guess;
let running = true;

while (running) {
    guess = Number(window.prompt(`What is the random number between ${MIN} and ${MAX}`));
    // console.log(guess)
    if(isNaN(guess)){
        window.alert("Please insert a valid number")
    }
    else if (guess < MIN || guess > MAX) {
        window.alert("Number is out of range")
    }
    else {
        if(guess < random) {
            MIN = guess
            console.log("Too small")
        }
        else if(guess > random) {
            MAX = guess
            console.log("Too big")
        }
        else {
            running = false
        }
    }
    attempts++

}
window.alert(`You had ${attempts} attempts`)

