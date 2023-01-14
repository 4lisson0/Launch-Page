const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secoundsEL = document.getElementById("secounds");

const newDate = "15 jan 2024";

function countDown() {
    const newYearDate = new Date(newDate);
    const currentDate = new Date();

    const totalSecounds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSecounds / 3600 / 24);
    const hours = Math.floor(totalSecounds / 3600) % 24;
    const mins = Math.floor(totalSecounds / 60) % 60;
    const secounds = Math.floor(totalSecounds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secoundsEL.innerHTML = formatTime(secounds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);