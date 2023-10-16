const readlineSync = require('readline-sync');
const height = readlineSync.question('Введите высоту: ');
const width = readlineSync.question('Введите ширину: ');
function calculateRectangleProperties(width, height) {
    if (width === height) {
        console.log('Это квадрат! :(');
        return;
    }
    const P = (width * 2) + (height * 2);
    console.log('Периметр равен: ' + P);
    return P;
};

calculateRectangleProperties(width, height);