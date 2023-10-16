const readlineSync = require('readline-sync');
const distance = readlineSync.question('Введите растояние : ');
const speed = readlineSync.question('Введите скорость (км/ч): ');
function calculateTime(distance, speed) {
    let hours = 0;
    let minutes = 0;
    const timeMillis = distance / (speed / 3600);
    if (timeMillis % 3600 === 0) {
        hours = timeMillis / 3600;
    } else if (timeMillis % 60 === 0) {
        minutes = timeMillis / 60;
    }
    
    console.log('Время в пути: ' + hours +' час(ов) ' + minutes + ' минут(а) ');
    return timeMillis;
};

calculateTime(distance, speed);