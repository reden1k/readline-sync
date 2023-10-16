const readlineSync = require('readline-sync');
const sentence = readlineSync.question('Введите предложение: ');
function countWords(sentence) {
    let count = sentence.split(' ').length;
    console.log(count);

};

countWords(sentence);