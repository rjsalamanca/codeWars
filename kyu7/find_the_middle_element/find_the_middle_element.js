var gimme = function (inputArray) {

    // We have to make copy of the the array or else sort will mutate inputArray
    const test = [...inputArray].sort(function (a, b) { return a - b })[Math.floor(inputArray.length / 2)];
    return inputArray.indexOf(test);
};

gimme([2, 3, 1])// 0, 'Finds the index of middle element'
gimme([5, 10, 14])// 1, 'Finds the index of middle element'