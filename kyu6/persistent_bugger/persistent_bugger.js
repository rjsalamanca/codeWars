function persistence(num) {
    let newNum = num;
    let countNum = 0;

    while (newNum.toString().length > 1) {
        newNum = newNum.toString().split('').reduce((tot, curr) => tot * curr);
        countNum++;
    }
    return countNum;
}

console.log(persistence(39)) //3
console.log(persistence(4)) //0
console.log(persistence(25)) //2
console.log(persistence(999)) //4
