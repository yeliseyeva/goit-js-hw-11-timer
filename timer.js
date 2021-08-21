const timer = {
    start() {
        const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const {hours, mins, secs} = getTimeComponents(deltaTime)

            console.log(`${hours}:${mins}:${secs}`);
        }, 1000)
    }
}

timer.start()

function pad(value) {
    return String(value).padStart(2, '0');
}
    
function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000 ));

    return {hours, mins, secs}
}