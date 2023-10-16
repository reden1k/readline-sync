const readlineSync = require('readline-sync');
const x1 = parseInt(readlineSync.question('Введите x1: '));
const y1 = parseInt(readlineSync.question('Введите y1: '));
const x2 = parseInt(readlineSync.question('Введите x2 '));
const y2 = parseInt(readlineSync.question('Введите y2: '));

function calculateDistance(x1, y1, x2, y2) {
    let resultX1 = 0;
    let resultX2 = 0;
    if (x1 > y1) {
        resultX1 = x1 - y1;
    }
    if (y1 > x1) {
        resultX1 = y1 = x1;
    }
    if (x2 > y2) {
        resultX2 = x2 - y2;
    }
    if (y2 > x2) {
        resultX2 = y2 - x2;
    }
    if (x1 === y1) {
        resultX1 = 0;
    }
    if (x2 === y2) {
        resultX2 = 0;
    }
    console.log(resultX1 + ' ' + resultX2);
    return resultX1, resultX2;
};

calculateDistance(x1, y1, x2, y2);