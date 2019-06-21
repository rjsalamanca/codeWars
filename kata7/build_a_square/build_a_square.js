function generateShape(int) {
    let holdShape = '';
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            holdShape += '+';
        }
        i != int - 1 ? holdShape += '\n' : ''
    }
    return holdShape;
}

console.log(generateShape(8))// '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'