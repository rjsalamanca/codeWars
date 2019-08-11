function eliminateUnsetBits(number) {
    let newNumber = parseInt(number.toString().replace(/0/g, ''), 2);
    return newNumber > 0 ? newNumber : 0;
}

const { assert } = require('chai');

describe("Fixed tests", function () {
    it("Testing for 11010101010101", () => assert.strictEqual(eliminateUnsetBits("11010101010101"), 255));
    it("Testing for 111", () => assert.strictEqual(eliminateUnsetBits("111"), 7));
    it("Testing for 1000000", () => assert.strictEqual(eliminateUnsetBits("1000000"), 1));
    it("Testing for 000", () => assert.strictEqual(eliminateUnsetBits("000"), 0));
});