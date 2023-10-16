const readlineSync = require('readline-sync');
const incomes = parseInt(readlineSync.question('Введите ваш доход: '));
const expenses = parseInt(readlineSync.question('Введите ваши расходы: '));
function calculateBalance(incomes, expenses) {
    const difference = incomes - expenses
    if (difference < 0) {
        console.log('Ваши расходы больше дохода! ' + difference);
    }
    console.log(difference);
    return difference;
};

calculateBalance(incomes, expenses);