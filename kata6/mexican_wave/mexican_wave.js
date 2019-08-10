function wave(x) {
    var ripple = [];
    for (var i = 0; i < x.length; i++) {
        ripple.push(x.split('').map((e, ind) => ind == i ? e.toUpperCase() : e).join(''))
    }
    return ripple;
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
    it("Testing for [3, 6, 9, 8, 9]", () => aassert.deepEqual(wave("two words"), result4));

    let result5 = [" Gap ", " gAp ", " gaP "];
    it("Testing for [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]", () => assert.deepEqual(wave(" gap "), result5));
});