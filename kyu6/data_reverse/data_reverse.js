function dataReverse(data) {
    let bytes = [];
    let bits = '';

    for (let i = 0; i < data.length; i++) {
        //Store every 8 bits into a string.
        bits += data[i].toString();

        //If we have 8 bits we push it into an array and clear the bits.
        if (bits.length == 8) {
            bytes.push(bits);
            bits = '';
        }
    }

    //Reverses the order of the bytes, joins so it's one long string, split 
    //into individual bits, and then converts the string to an integer.
    return bytes.reverse().join('').split('').map(e => parseInt(e));
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

dataReverse(data1) // Answer is data2