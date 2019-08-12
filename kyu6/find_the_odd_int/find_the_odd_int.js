function findOdd(A) {
    let numCount = {};
    let odd;

    for (let i = 0; i < A.length; i++) {
        (!numCount.hasOwnProperty(`n${A[i]}`)) ? numCount[`n${A[i]}`] = 1 : numCount[`n${A[i]}`]++;
    }

    Object.entries(numCount).forEach(entry => {
        if (entry[1] % 2 !== 0) {
            odd = (entry[0].substring(1, entry[0].length))
        }
    })

    return odd;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])) // -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 5
console.log(findOdd([10])) // 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])) // 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])) // 1