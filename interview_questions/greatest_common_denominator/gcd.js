function gcd(num1, num2) {
    const minNum = Math.min(num1, num2);
    let greatest = 0;

    for (let i = 0; i <= minNum; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            greatest = i;
        }
    }

    return greatest;
}

console.log(gcd(8, 18)); // 2
console.log(gcd(8, 32)); // 8
console.log(gcd(9, 17)); // 1