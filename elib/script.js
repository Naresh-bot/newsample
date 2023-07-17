function getCurrentDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toLocaleTimeString('en-US', { timeStyle: 'medium'});

    return { date, day, time };
}

function updateDateTime() {
    const { date, day, time } = getCurrentDateTime();
    document.getElementById('date').textContent = date;
    document.getElementById('day').textContent = day;
    document.getElementById('time').textContent = time;
}

setInterval(updateDateTime, 1000);

