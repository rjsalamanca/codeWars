var countSheep = function (num) {
    let sheep = ''
    for (let i = 0; i < num; i++) sheep += `${i + 1} sheep...`;
    return sheep;
}
const { assert } = require("chai");

describe('Basic Tests', function () {
    it("Testing for countSheep(1)", () => assert.deepEqual(countSheep(1), "1 sheep..."));
    it("Testing for countSheep(2)", () => assert.deepEqual(countSheep(2), "1 sheep...2 sheep..."))
    it("Testing for countSheep(3)", () => assert.deepEqual(countSheep(3), "1 sheep...2 sheep...3 sheep..."))
});