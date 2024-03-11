const tempInput = document.getElementById("tempInput")
const celToFahrBtn = document.getElementById("celToFahrBtn")
const fahrToCelBtn = document.getElementById("fahrToCelBtn")
const submitBtn = document.getElementById("submitBtn")
const result = document.getElementById("result")

function convert(temp) {
    if (celToFahrBtn.checked) {
        return temp * 9 / 5 + 32
    }
    else if (fahrToCelBtn.checked) {
        return (temp - 32) * 5 / 9
    }
    else {
        return "Select a unit"
    }
}

function getUnit() {
    if (celToFahrBtn.checked) {
        return "°F"
    }
    else if (fahrToCelBtn.checked) {
        return "°C"
    }
    else {
        return "Select a unit"
    }
}

submitBtn.onclick = function() {
    let answer = convert(temp=Number(tempInput.value))
    result.textContent = `${answer}${getUnit()}`
}
