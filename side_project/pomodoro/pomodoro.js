let body = document.querySelector('body');

let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');

let minSection = document.querySelector('.minute');
let secSection = document.querySelector('.second');

let runInterval;
let breakInterval;

// start button function
startBtn.addEventListener('click', () => {
    let time = 25 * 60;
    startBtn.disabled = true;
    runInterval = setInterval(() => {
        let min = parseInt(time / 60);
        let sec = time % 60;
        minSection.innerText = min;
        secSection.innerText = sec;
        time -= 1;
        if (time == -1) {
            clearInterval(runInterval);
            body.classList.remove('run-mode');
            body.classList.add('break-mode');
            time = 5 * 60;
            breakInterval = setInterval(() => {
                let min = parseInt(time / 60);
                let sec = time % 60;
                minSection.innerText = min;
                secSection.innerText = sec;
                time -= 1;
            }, 1000);
            if (time == 0){
                clearInterval(breakInterval);
            }
        }
    }, 1000);
});

// reset button function
resetBtn.addEventListener('click', () => {
    clearInterval(runInterval);
    clearInterval(breakInterval);
    minSection.innerText = 0;
    secSection.innerText = 0;
    startBtn.disabled = false;
    body.classList.remove('break-mode');
    body.classList.add('run-mode');    
});