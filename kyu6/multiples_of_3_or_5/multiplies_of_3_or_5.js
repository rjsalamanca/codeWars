function solution(number) {
    let multiples = [];

    if (number <= 0) return 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            multiples.push(i);
        }
    }

    return multiples.reduce((tot, curr) => tot + curr);
}

console.log(solution(10)) //23