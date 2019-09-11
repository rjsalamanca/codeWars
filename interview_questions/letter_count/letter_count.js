function letterCount(str) {
    let countedLetters = {};

    str.toLowerCase().split('').forEach(letter => {
        countedLetters.hasOwnProperty(letter) ? countedLetters[letter]++ : countedLetters[letter] = 1;
    });

    return countedLetters;
}

console.log(letterCount('JavaScript'));
// j:1
// a:2
// v:1
// s:1
// c:1
// r:1
// i:1
// p:1
// t:1