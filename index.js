const input = document.getElementById("input")
const results = document.getElementById("results")
const dices = document.getElementById("dices")

let values = []
let images = []

function diceRoller() {
    let numDices = Number(input.value)
    for (i=0; i < numDices; i++) {
        let numRandom = Math.floor(Math.random() * 6) + 1
        values.push(numRandom);
        images.push(`<img src="dices/Dice-${numRandom}.png" width=50 height=50 alt="Dice ${numRandom}">`);
    }
    console.log(images)
    results.textContent = `dices: ${values.join(', ')}`
    dices.innerHTML = images.join(' ');
    values = []
    images = []
}