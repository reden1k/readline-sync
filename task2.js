const readlineSync = require('readline-sync');
const celsius = readlineSync.question('Введите градусы в Цельсиях: ');
function celsiusToFahrenheit (celsius) {
    const convertation = (celsius * 9 / 5) + 32;
    console.log(convertation);
    return convertation;
};

celsiusToFahrenheit(celsius);