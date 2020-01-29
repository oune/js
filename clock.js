const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${setNum(hours)}:${setNum(minutes)}:${setNum(seconds)}`;
}
function setNum(num) {
    return `${num < 10 ? `0${num}` : num }`
}
function init() {
    getTime(); 
    setInterval(getTime, 1000);
}

init();