$(document).ready(function() {
    var timer;
    var minutes = 0;
    var seconds = 0;
    var running = false;

    function updateDisplay() {
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
    }

    function startTimer() {
        running = true;
        timer = setInterval(function() {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                endTimer();
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        running = false;
    }

    function resetTimer() {
        stopTimer();
        minutes = 0;
        seconds = 0;
        updateDisplay();
    }

    function endTimer() {
        alert('Time is up!');
        resetTimer();
    }

    $('#startButton').click(function() {
        if (!running) {
            startTimer();
        }
    });

    $('#resetButton').click(function() {
        resetTimer();
    });

    $('#setTimerButton').click(function() {
        if (!running) {
            var inputMinutes = parseInt($('#timerInput').val());
            if (!isNaN(inputMinutes) && inputMinutes >= 0) {
                minutes = inputMinutes;
                updateDisplay();
            } else {
                alert('Please enter a valid number of minutes.');
            }
        }
    });
});
