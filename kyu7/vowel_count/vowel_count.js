function getCount(str) {
    return str.match(/a|e|i|o|u/g) === null ? 0 : str.match(/a|e|i|o|u/g).length;
}

console.log(getCount("abracadabra")); //5
console.log(getCount('f')); //0