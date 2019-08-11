function accum(s) {
    let extended = '';

    for (let i = 0; i < s.length; i++) {
        let temp = '';
        for (let j = 0; j <= i; j++) {
            temp += (j == 0) ? s[i].toUpperCase() : s[i].toLowerCase();
        }
        extended += temp + '-';
    }

    return extended.substring(0, extended.length - 1)
}
console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // "C-Ww-Aaa-Tttt"