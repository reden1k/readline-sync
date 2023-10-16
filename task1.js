const readlineSync = require('readline-sync');
const income = readlineSync.question('Введите ваш доход: ');
const incomeTaxCalculator = (income) => {
    const taxPercentage = 15;
    const salaryAfterTax = income - ((income / 100) * taxPercentage);
    console.log('Зарплата после вычета налогов: '.concat(salaryAfterTax));
    return salaryAfterTax;
};

incomeTaxCalculator(income);