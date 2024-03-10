const counterLabel = document.getElementById("counterLabel")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")
let counter = 0

increaseBtn.onclick = function() {
    counter++;
    counterLabel.textContent = counter;
}

decreaseBtn.onclick = function() {
    counter--;
    counterLabel.textContent = counter;
}

resetBtn.onclick = function() {
    counter = 0;
    counterLabel.textContent = counter;
}

console.log(counter, typeof counter)