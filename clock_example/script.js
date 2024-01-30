let initiateClock = function () {
    let secondHand = document.getElementById('second-hand');
    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let tickSecond = function () {
        seconds = (seconds + 1) % 60;
        secondHand.style.transform = "rotate(" + (seconds * 6 - 90) + "deg)";

        if (seconds === 0) {
            minutes = (minutes + 1) % 60;
            minuteHand.style.transform = "rotate(" + (minutes * 6 - 90) + "deg)";

            if (minutes === 0 && seconds === 0) {
                hours = (hours + 1) % 12;
                hourHand.style.transform = "rotate(" + ((hours % 12) * 30 - 90) + "deg)";
            }
        }

    };
    let startClock = setInterval(tickSecond, 1000);
}
initiateClock();