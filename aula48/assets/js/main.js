let value = 0;
let timer = document.querySelector('.timer');
let running = false;
let interval;

function secondsParsed(value) {
    const sec = parseInt(value, 10);
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
};

function update() {
    timer.innerHTML = secondsParsed(value);
    value++;
}

function start() {
    running = true;
    timer.style.color = 'black';

    function turnOn() {
        interval = setInterval(update, 1000);
    };   
    
    if (running = true) {
        turnOn();
    }
};

function end() {
    running = false;

    if (running === false && value !== 0) {
        clearInterval(interval);
        timer.style.color = 'red';
    }
};

function zerar() {
    value = 0;
    timer.innerHTML = secondsParsed(value);
    timer.style.color = 'black';
};