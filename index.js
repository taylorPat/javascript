const stopTime = document.getElementById("time");
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startWatch() {
    if (!isRunning){
        console.log("Press start button");
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        console.log(startTime);
        isRunning = true;
    }
}

function stopWatch() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        console.log(elapsedTime)
        isRunning = false;
    }
}

function resetWatch() {
    if (!isRunning) {
        stopTime.textContent = "00:00:00:00";
        startTime = 0;
        elapsedTime = 0;
    }
}


function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const hours = Math.floor((elapsedTime % (1000*60*60*24)) / (1000*60*60)).toString().padStart(2, 0);
    const min = Math.floor((elapsedTime % (1000*60*60)) / (1000*60)).toString().padStart(2, 0);
    const sek = Math.floor((elapsedTime % (1000*60)) / (1000)).toString().padStart(2, 0);
    const miliSek = Math.floor(elapsedTime % 100).toString().padStart(2, 0);
    stopTime.textContent = `${hours}:${min}:${sek}:${miliSek}`
}
