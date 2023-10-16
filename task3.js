const readlineSync = require('readline-sync');
const price = readlineSync.question('Введите цену: ');
const discount = readlineSync.question('Введите размер скидки в процентах: ');
function calculateDiscount(price, discountPercentage) {
    discountPrice = price - ((price / 100) * discountPercentage);
    console.log('Цена после скидки: ' + discountPrice);
    return discountPercentage;
};

calculateDiscount(price, discount);