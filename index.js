const display = document.getElementById("display");

function appendtoDisplay(symbol) {
    console.log("input: ", display.value.at(-1))
    if (display.value === "" && symbol === ".") {
        console.log("not possible")
    }
    else if (display.value.at(-1) === "." && symbol === ".") {
        console.log("also not possible")
    }
    else {
        display.value += symbol;
    }
    console.log(display.value)
}

function calculate() {
    let formula = display.value;
    try {
        display.value = eval(formula);
    }
    catch(error){
        display.value = "ERROR"
    }
}

function clearDisplay(){
    display.value = "";
}

function clearLast() {
    display.value = display.value.substring(0, display.value.length-1)
}