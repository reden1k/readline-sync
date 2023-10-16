const readlineSync = require('readline-sync');
const str = readlineSync.question('Введите текст: ');
const exception = readlineSync.question('Введите слово исключение: ');
function reverseStringWithException(str, exception) {
    let massive = str.split(' ');
    let reversedText = '';
    for (let i = 0; i <= massive.length - 1;) {
        let word = massive[i];
        i += 1;
        let lowerCaseWord = word.toLowerCase();
        if (lowerCaseWord === exception) {
            reversedText += word + ' ';
            continue;
        }
        reversedText += word.split('').reverse().join('') + ' ';
        
    }
    console.log(reversedText);
    return reversedText; 
    
};

reverseStringWithException(str, exception);