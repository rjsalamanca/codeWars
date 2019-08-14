function getMiddle(s) {
    return (s.length % 2 == 1) ? s[Math.floor(s.length / 2)] : s[(s.length / 2) - 1] + s[s.length / 2]
}

console.log(getMiddle("test")); //"es"
console.log(getMiddle("testing")); //"t"
console.log(getMiddle("middle")); //"dd"
console.log(getMiddle("A")); //"A"