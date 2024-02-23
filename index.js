let startbut = document.getElementById('start');
let stopbut = document.getElementById('stop');
let resetbut = document.getElementById('reset');
let lapbut = document.getElementById('lap');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;
let c=1;
startbut.addEventListener('click', function () {
    timer = true;
    stopwatch();
});

stopbut.addEventListener('click', () => {
    timer = false;
});

resetbut.addEventListener('click', () => {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    c=1;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('lapres').innerHTML ="";
});

lapbut.addEventListener('click', () => {
    timer = true;
    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;
    const para = document.createElement("p");
    para.innerText = `Lap ${c}: ${hrString}:${minString}:${secString}`;
    document.getElementById('lapres').appendChild(para);
    c++;
});

const stopwatch = () => {
    if (timer)
        count++;
    if (count == 100) {
        second++;
        count = 0;
    }
    if (second == 60) {
        minute++;
        second = 0;
    }
    if (minute == 60) {
        hour++;
        minute = 0;
    }
    if (hour == 99) {
        minute = 0;
        second = 0;
    }

    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;

    setTimeout(stopwatch, 10);
}