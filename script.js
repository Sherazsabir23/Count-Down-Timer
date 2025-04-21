let expiredDate = new Date('May 21, 2025 18:38:25');
let countdown = setInterval(function() {
    let nowDate = new Date();
    let totalDistance = (expiredDate - nowDate) / 1000; // Calculate distance in seconds

    if (totalDistance <= 0) {
        clearInterval(countdown); 
        
        document.getElementById('days').textContent = '0 Days';
        document.getElementById('hours').textContent = '0 hours';
        document.getElementById('minutes').textContent = '0 minutes';
        document.getElementById('seconds').textContent = '0 seconds';
        return;
    }

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(totalDistance / (3600 * 24));
    let remainingSeconds = totalDistance % (3600 * 24);

    let hours = Math.floor(remainingSeconds / 3600);
    let remainingSecondsAfterHours = remainingSeconds % 3600;

    let minutes = Math.floor(remainingSecondsAfterHours / 60);
    let seconds = Math.floor(remainingSecondsAfterHours % 60);

    document.getElementById('days').textContent = `${days} Days`;
    document.getElementById('hours').textContent = `${hours} hours`;
    document.getElementById('minutes').textContent = `${minutes} minutes`;
    document.getElementById('seconds').textContent = `${seconds} seconds`;
},1000); 
