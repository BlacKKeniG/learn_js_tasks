function clockManadger(clock) {
    let timerId;
    const start = document.querySelector(`${clock} .start`);
    const stop = document.querySelector(`${clock} .stop`);
    const hoursDisplay = document.querySelector(`${clock} .hours`);
    const mimDisplay = document.querySelector(`${clock} .min`);
    const secDisplay = document.querySelector(`${clock} .sec`);

    console.log(hoursDisplay);
    console.log(mimDisplay);
    console.log(secDisplay);


    function run() {
        let today = new Date();
        let hh = today.getHours();
        let mm = today.getMinutes();
        let ss = today.getSeconds();

        hoursDisplay.textContent = getZeroIfNead(hh);
        mimDisplay.textContent = getZeroIfNead(mm);
        secDisplay.textContent = getZeroIfNead(ss);
    }

    start.addEventListener('click', () => {
        timerId = setInterval(run, 1000);
    });

    stop.addEventListener('click', () => {
        clearInterval(timerId);
    });

    function getZeroIfNead(num) {
        return  (num < 10) ? `0${num}` : `${num}`;           
    }
}

clockManadger('.clock');