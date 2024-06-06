// Clock Functionality
let initiateClock = function () {
    let secondHand = document.getElementById('second-hand');
    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');

    let tickSecond = function () {
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        const hr_rotation = (hr % 12) * 30 + min / 2;
        const min_rotation = min * 6 + sec / 10;
        const sec_rotation = sec * 6;

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

// Stopwatch Functionality
let stopwatchIntervalId;
let stopwatchSeconds = 0;
let stopwatchRunning = false;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchIntervalId = setInterval(() => {
            stopwatchSeconds++;
            document.getElementById('stopwatch-display').innerText = formatTime(stopwatchSeconds);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchIntervalId);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchIntervalId);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    document.getElementById('stopwatch-display').innerText = '00:00:00';
}

document.querySelector('.start-stopwatch').addEventListener('click', startStopwatch);
document.querySelector('.stop-stopwatch').addEventListener('click', stopStopwatch);
document.querySelector('.reset-stopwatch').addEventListener('click', resetStopwatch);

// Timer Functionality
let timerIntervalId;
let timerTimeRemaining = 0;
let timerRunning = false;

function updateTimerDisplay() {
    document.getElementById('timer-display').innerText = formatTime(timerTimeRemaining);
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerIntervalId = setInterval(() => {
            if (timerTimeRemaining > 0) {
                timerTimeRemaining--;
                updateTimerDisplay();
            } else {
                clearInterval(timerIntervalId);
                timerRunning = false;
                alert("Time's up
                }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerIntervalId);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerIntervalId);
    timerRunning = false;
    timerTimeRemaining = 0;
    updateTimerDisplay();
}

document.querySelector('.start-timer').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('timer-hours').value) || 0;
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
    timerTimeRemaining = (hours * 3600) + (minutes * 60) + seconds;
    updateTimerDisplay();
    startTimer();
});

document.querySelector('.pause-timer').addEventListener('click', pauseTimer);
document.querySelector('.reset-timer').addEventListener('click', resetTimer);
