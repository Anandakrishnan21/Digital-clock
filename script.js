const section = document.querySelector("section");
const container = document.querySelector(".container");
const icon = document.querySelector(".icon");
// dark mode
icon.addEventListener("click", () => [
    section.classList.toggle("dark")
])
// working 
setInterval(function () {
    const clock = document.querySelector(".time");
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = 'AM';
    if (hr > 12) {
        day = 'PM';
        hr = hr - 12;
    } else if (hr == 0) {
        hr = 12;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    clock.textContent = hr + ' : ' + min + ' : ' + sec + '  ' + day;

})