const refs = {
    day: document.querySelector('[data-value="days"]'),
    hour: document.querySelector('[data-value="hours"]'),
    min: document.querySelector('[data-value="mins"]'),
    sec: document.querySelector('[data-value="secs"]'),
};

const timer = {
    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const finishTime = new Date(2021, 9, 31);
            const deltaTime = finishTime - currentTime;
            const {days, hours, mins, secs} = getTimeComponents(deltaTime)

            refs.day.textContent = `${days}`;
            refs.hour.textContent = `${hours}`;
            refs.min.textContent = `${mins}`;
            refs.sec.textContent = `${secs}`;
        }, 1000)
    }
}

timer.start()

function pad(value) {
    return String(value).padStart(2, '0');
}
    
function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000 ));

    return {days, hours, mins, secs}
}