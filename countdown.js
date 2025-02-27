function updateCountdown() {
    let now = new Date();
    let year = now.getFullYear();

    let nextBirthday = new Date(year, 1, 28); 
    if (now > nextBirthday) {
        nextBirthday = new Date(year + 1, 1, 28); 
    }

    let timeDiff = nextBirthday - now;

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
