function updateClock() {
    const countdown = new Date("May 2, 2024 00:00:00")
    const now = new Date();

    const delta = countdown - now;
    const days = Math.floor(delta / 1000 / 60 / 60 / 24);
    const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((delta % (1000 * 60 * 60 )) / (1000 * 60 ));
    const seconds = Math.floor((delta % (1000 * 60 )) / (1000)).toString().padStart(2, 0);

    // const hours = now.getHours().toString().padStart(2, 0);
    // const minutes = now.getMinutes().toString().padStart(2, 0);
    // const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000)