const readlineSync = require('readline-sync');
    const salary = readlineSync.question('Введите вашу зарплату: ');
    const performanceRating = readlineSync.question('Введите ваш рейтинг: ');
const calculateEmployeeBonus = (salary, performanceRating) => {
    let result = 0;
    if (performanceRating > 8 ) {
        result = salary * 20 / 100
    } else  {
        result = salary * 10 / 100;
    }
    console.log(result);
    return result;
};

calculateEmployeeBonus(salary, performanceRating);