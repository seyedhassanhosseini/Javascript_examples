
let ID;
let seconds = 0;

function printMessage() {
    //document.getElementById('message').innerHTML = 'hello word agter 2 second';
    document.getElementById('message').innerHTML = seconds + 'seconds'
    seconds++;
}

function start() {
    ID = window.setInterval(printMessage,100)
}

function stop() {
    window.clearInterval(ID)
}

function reset() {
    seconds = 0;
    document.getElementById('message').innerHTML = '';

}