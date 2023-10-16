function generateRandomEquation() {
    const a = (Math.random() * 100).toFixed(0);
    const b = (Math.random() * 100).toFixed(0);
    const x = (Math.random() * 100).toFixed(0);
    const c = (Math.random() * 100).toFixed(0);

    const formule = (a * x + b) === c;
    console.log(a + ' \* ' + x + ' + ' + b + ' = ' + c + ' -> ' + formule);
};

generateRandomEquation();
