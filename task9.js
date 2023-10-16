const readlineSync = require('readline-sync');
const grades = readlineSync.question('Введите список оценок через пробел: ');

function calculateAverageGrade(grades) {
let massive = grades.split(' ');
let count = 0;
let sum = 0;
for (let i = 0; i <= massive.length - 1; i += 1) {
    sum += parseInt(massive[i]);
    ++count;
}
const average = sum / count;
console.log('Средний балл: '+ average);
return average;
};

calculateAverageGrade(grades);