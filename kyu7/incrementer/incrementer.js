function incrementer(nums) {
    if (nums.length === 0) {
        return []
    } else {
        return nums.map((curr, ind) => {
            let newNum = curr + (ind + 1);
            return (newNum >= 10) ? parseInt(newNum.toString().split('').pop()) : newNum;
        })
    }
}

const { assert } = require("chai");

describe("Basic Tests", function () {
    it("Testing for []", () => assert.deepEqual(incrementer([]), []));
    it("Testing for [1, 2, 3]", () => assert.deepEqual(incrementer([1, 2, 3]), [2, 4, 6]));
    it("Testing for [4, 6, 7, 1, 3]", () => assert.deepEqual(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]));
    it("Testing for [3, 6, 9, 8, 9]", () => assert.deepEqual(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]));
    it("Testing for [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]", () =>
        assert.deepEqual(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]));
});