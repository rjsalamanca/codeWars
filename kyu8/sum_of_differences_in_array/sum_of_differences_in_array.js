function sumOfDifferences(arr) {
    let total = 0;

    if (arr.length > 0) {
        arr.sort((a, b) => a - b).reverse();
        for (let i = 0; i < arr.length - 1; i++) {
            total += arr[i] - arr[i + 1];
        }
    }
    return total;
}

sumOfDifferences([1, 2, 10])// 9
sumOfDifferences([-3, -2, -1])// 2