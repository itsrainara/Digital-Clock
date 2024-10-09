const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hrs;
    minutes.textContent = mins;
    seconds.textContent = sec;
})