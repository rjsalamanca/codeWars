function wave(x) {
    let ripple = [];

    for (let i = 0; i < x.length; i++) {
        ripple.push(x.split('').map((e, ind) => (!e.match(/([a-z])/g)) ? e : (ind == i) ? e.toUpperCase() : e).join(''))
    }

    return ripple.filter(e => e !== x);
}

const { assert } = require("chai");

describe("Basic Tests", function () {
    let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    it("Testing for hello", () => assert.deepEqual(wave("hello"), result));

    let result2 = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
    it("Testing for codewars", () => assert.deepEqual(wave("codewars"), result2));

    let result3 = [];
    it("Testing for []", () => wave(""), result3);

    let result4 = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
    it("Testing for 'two words'", () => assert.deepEqual(wave("two words"), result4));

    let result5 = [" Gap ", " gAp ", " gaP "];
    it("Testing for ' gap '", () => assert.deepEqual(wave(" gap "), result5));
});