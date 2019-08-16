function highAndLow(numbers) {
    let newNumbers = numbers.split(' ').map(number => parseInt(number))
    return Math.max(...newNumbers) + ' ' + Math.min(...newNumbers)
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") // "542 -214"