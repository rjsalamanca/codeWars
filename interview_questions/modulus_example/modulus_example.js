function modulus_ex(num1, num2) {
    let divisibles = [];

    for (let i = 1; i <= 1000; i++) {
        if (i % num1 == 0 || i % num2 == 0) {
            divisibles.push(i);
        }
    }

    return divisibles;
}

console.log(modulus_ex(3, 5));