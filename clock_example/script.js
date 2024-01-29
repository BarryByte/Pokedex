let initiateClock = function () {
    let secondHand = document.getElementById('second-hand'); 
    let seconds = 0;
    let tickSecond = function () {
        seconds = (seconds + 1) % 60;
        secondHand.style.transform = "rotate(" + (seconds * 6 - 90 )+ "deg)";

    };
    let startClock = setInterval(tickSecond, 1000);
}
initiateClock();