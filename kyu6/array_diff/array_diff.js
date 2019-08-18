function array_diff(a, b) {
    let diff = a;

    b.forEach(number => {
        diff = diff.filter(curr => curr != number);
    })

    return diff;
}

array_diff([-1, -20, 1, 5, 14, -14, -4, -5, 5, -17, -12, -18, 18, 19, 18, 0, 14, -11], [-20, 0, 18, -17, -18, 5])