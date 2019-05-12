function sendMessage(message){
    const phoneLayout = {
        '1':'.,?!',
        '2':'abc',
        '3':'def',        
        '4':'ghi',
        '5':'jkl',
        '6':'mno',        
        '7':'qprs',
        '8':'tuv',
        '9':'wxyz',        
        '0':' ',
        '*':'\'-+=',
    }

    message = message.split('').map((letter,index) => {
        let buttonClicks = '';
        let changedCase = false;

        if(letter == ' '){
            buttonClicks += ' ';  
        } else if(letter == letter.toUpperCase()){
            buttonClicks += '#';
            letter = letter.toLowerCase();
            changedCase = true;
        }

        for(key in phoneLayout){
            const timesPressed = phoneLayout[key].indexOf(letter);
            const lastPressed = phoneLayout[key].indexOf(message[index-1])

            if(timesPressed != -1 && lastPressed != -1){
                buttonClicks += ' '
            }
            if(timesPressed != -1){
                for(let i = 0; i <= timesPressed; i++){
                    buttonClicks += key
                }
            }
        }

        if(changedCase){
            buttonClicks += '#'
        }
        console.log(`Letter: ${letter} Clicks: ${buttonClicks}`)

        return buttonClicks;
    });
    return message.join('');
}


// TESTING
console.log(sendMessage('heyy ')); //4433999
console.log(sendMessage('one two three')); // "666 6633089666084477733 33"
console.log(sendMessage('Hello World!')); //"#44#33555 5556660#9#66677755531111"
//   ["Def Con 1!", "#3#33 3330#222#666 6601-1111"],
//   ["A-z", "#2**#9999"],
//   ["1984", "1-9-8-4-"],
//   ["Big thanks for checking out my kata", "#22#444 4084426655777703336667770222443322255444664066688 806999055282"]