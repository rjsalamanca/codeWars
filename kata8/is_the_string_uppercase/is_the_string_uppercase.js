String.prototype.isUpperCase = function () {
    return (this.match(/([a-z])/g) === null) ? true : false;
}

const { assert } = require('chai');

describe('Fixed Tests', function () {
    it("should work for the examples provided in the description", () => {
        //Test.expect(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
        assert.deepEqual('c'.isUpperCase(), false, 'c is not upper case');
        assert.deepEqual('C'.isUpperCase(), true, 'C is upper case');
        assert.deepEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
        assert.deepEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
        assert.deepEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
        assert.deepEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
    });

    it("should also work for a few other basic tests", () => {
        assert.deepEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
        assert.deepEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
        assert.deepEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
        assert.deepEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
        assert.deepEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
        assert.deepEqual('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
        assert.deepEqual('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
        assert.deepEqual('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
        assert.deepEqual('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
        assert.deepEqual('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
        assert.deepEqual('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
        assert.deepEqual('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
        assert.deepEqual('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
        assert.deepEqual('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
        assert.deepEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
        assert.deepEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
        assert.deepEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
        assert.deepEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
    });
});