function getCurrentDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toLocaleTimeString('en-US', { timeStyle: 'short'});
    const seconds = now.getSeconds();

    return { date, day, time, seconds };
}

function updateDateTime() {
    const { date, day, time, seconds } = getCurrentDateTime();
    document.getElementById('date').textContent = date;
    document.getElementById('day').textContent = day;
    document.getElementById('time').textContent = time + ":" + seconds;
}

setInterval(updateDateTime, 1000);

