function playPass(s, n){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    return s.toLowerCase().split('').map((char,ind) =>
        {
            // Go through this if statement if the character is an alphabet.
            if(char.match(/([a-zA-Z])/)){
                let convert = '';
                // Checks if we need to loop around. If we do run this statement.
                if(alpha.indexOf(char) + n > alpha.length - 1){
                    let added = char;
                    // do a for loop to iterate through and if we reach the end of the alpha, go back to 0. Will handle large numbers 
                    // in case we need to loop more than once
                    for(let i = 0; i < n; i++) (alpha.indexOf(added) + 1 > alpha.length - 1) ? added = alpha[0]: added = alpha[alpha.indexOf(added) + 1];
                    return (ind % 2 == 0) ? added.toUpperCase() : added;
                // If we dont need to loop back to the start of the alphabet, just add the rotation.
                } else {
                    convert = alpha[alpha.indexOf(char) + n]
                }
                return (ind % 2 == 0) ? convert.toUpperCase() : convert;
            }
            // Go through this if statement if the character is a number.
            else if (char.match(/([0-9])/)){
                return (9-parseInt(char)).toString();
            // If NaN or alpha 
            } else {
                return char;
            }
        }).reverse().join('');
}

console.log(playPass("I LOVE YOU!!!", 1)); // !!!vPz fWpM J
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)); // 4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO
console.log(playPass('TO BE HONEST WITH YOU I DON\'T USE THIS TEXT TOOL TOO OFTEN BUT HEY... MAYBE YOUR NEEDS ARE DIFFERENT.',5)); // .ySjWjKkNi jWf xIjJs wZtD JgDfR ...dJm yZg sJyKt tTy qTtY YcJy xNmY JxZ Y\'StI N ZtD MyNb yXjStM Jg tY