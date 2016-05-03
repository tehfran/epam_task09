(function () {
    var pageArray = [
        '/gallery/page1.html',
        
        '/gallery/page2.html',
        
        '/gallery/page3.html'
    ],
        timeout = 3,
        current,
        interval = 1000,
        seconds = 0,
        backButton = window.document.getElementById('Back'),
        pauseButton = window.document.getElementById('Pause'),
        forwardButton = window.document.getElementById('Forward'),
        timeRemaining = window.document.getElementById('Timer'),
        pauseOrResume = true,
        countdown;
    
    if (localStorage.getItem("current") === null) {
        current = 0;
        localStorage.setItem("current", current);
    } else {
        current = parseInt(localStorage.getItem("current"));
    }
    
    function confirmRestart() {
        if (window.confirm("You've reached the end of the gallery! Start over?")) {
            localStorage.setItem("current", 0);
            window.location.href = pageArray[0];
        } else {
            window.open(location, '_self', '');
            window.close();
        }
    }
    
    function goForward() {
        if (current < (pageArray.length - 1)) {
            current += 1;
            localStorage.setItem("current", current);
            window.location.href = pageArray[current];
        } else {
            confirmRestart();
        }
    }
    
    function goBackward() {
        if (current !== 0) {
            current -= 1;
            window.location.href = pageArray[current];
        }
    }
    
    function Timer(callback, delay) {
        var timerId,
            start,
            remaining = delay;
            /*startTimeMS = (new Date()).getTime();*/

        this.pause = function () {
            window.clearTimeout(timerId);
            remaining -= new Date() - start;
        };

        this.resume = function () {
            start = new Date();
            window.clearTimeout(timerId);
            timerId = window.setTimeout(callback, remaining);
        };

        this.resume();
        
        this.stop = function () {
            window.clearTimeout(timerId);
        };
        
        this.restart = function () {
            start = new Date();
            timerId = window.setTimeout(callback, 1000);
        };
        
        this.restart();
    }

    countdown = new Timer(function () {
        if (seconds < timeout) {
            timeRemaining.innerHTML = "Next page will load in " + (timeout - seconds) + " seconds...";
            seconds += 1;
            countdown.restart();
        } else {
            goForward();
            seconds = 0;
            countdown.restart();
        }
    }, interval);
    
    
    pauseButton.addEventListener('click', function () {
        if (pauseOrResume) {
            countdown.pause();
        } else {
            countdown.resume();
        }
        pauseOrResume = !pauseOrResume;
    });
    
    forwardButton.addEventListener('click', function () {
        goForward();
    });
    
    backButton.addEventListener('click', function () {
        goBackward();
    });
        
}());