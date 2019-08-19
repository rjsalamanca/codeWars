function score(dice) {
    // Fill me in!
    var sides = {};
    for (var i = 0; i < 6; i++) {
        var find = new RegExp(i)
        sides['side' + (i + 1)] = { count: dice.join('').match(/1/g).length };
    };

    console.log(sides);
    return 0;
}

const { expect } = require('chai');

describe("Scorer Function", function () {
    it("should value this as worthless", function () {
        expect(score([2, 3, 4, 6, 2]) == 0, "Should be 0 :-(");
    });

    it("should value this triplet correctly", function () {
        expect(score([4, 4, 4, 3, 3]) == 400, "Should be 400");
    });

    it("should value this mixed set correctly", function () {
        expect(score([2, 4, 4, 5, 4]) == 450, "Should be 450");
    });
});