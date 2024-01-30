let initiateClock = function () {
    let secondHand = document.getElementById('second-hand');
    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let tickSecond = function () {
        // seconds = (seconds + 1) % 60;
        // secondHand.style.transform = "rotate(" + (seconds * 6 - 90) + "deg)";

        // if (seconds === 0) {
        //     minutes = (minutes + 1) % 60;
        //     minuteHand.style.transform = "rotate(" + (minutes * 6 - 90) + "deg)";

        //     if (minutes === 0 && seconds === 0) {
        //         hours = (hours + 1) % 12;
        //         hourHand.style.transform = "rotate(" + ((hours % 12) * 30 - 90) + "deg)";
        //     }
        // }
        let d = new Date(); 
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let hr_rotation = 30 * hr + min / 2; //converting current time
        let min_rotation = 6 * min;
        let sec_rotation = 6 * sec;

        hourHand.style.transform = `rotate(${hr_rotation}deg)`;
        minuteHand.style.transform = `rotate(${min_rotation}deg)`;
        secondHand.style.transform = `rotate(${sec_rotation}deg)`;


    };

    let intervalId = setInterval(tickSecond, 1000);

    return intervalId;
}

let clockIntervalId = initiateClock();

let pause = document.querySelector('#buttons .pause');
let play = document.querySelector('#buttons .play');

pause.addEventListener('click', function () {
    clearInterval(clockIntervalId);
    console.log("Clock paused");
});

play.addEventListener('click', function () {
    clearInterval(clockIntervalId);
    clockIntervalId = initiateClock();
    console.log("Clock resumed");
});
