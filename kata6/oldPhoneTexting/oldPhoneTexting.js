function sendMessage(message){
    const phoneLayout = {
        '0':' ',
        '1':'.,?!',
        '2':'abc',
        '3':'def',        
        '4':'ghi',
        '5':'jkl',
        '6':'mno',        
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',        
        '*':'\'-+=',
        '#':''
    }

    let holdCase = false;

    message = message.split('').map((letter,index) => {
        let buttonClicks = '';
        let changedCase = false;
        const nextLetter = message[index+1];
        if(letter.match(/[A-Z]/)){
            if(letter == letter.toUpperCase()){

                if(holdCase == false){
                    buttonClicks += '#';
                    holdCase = true;
                }

                letter = letter.toLowerCase();
                if(index != message.length -1){
                    changedCase = true;
                    holdCase = true;
                }
            }
        }

        for(key in phoneLayout){
            const timesPressed = phoneLayout[key].indexOf(letter);
            const lastPressed = phoneLayout[key].indexOf(message[index-1]);
            const nextPress = phoneLayout[key].indexOf(message[index+1]);
            
            if(buttonClicks[buttonClicks.length-1] != '#' && timesPressed != -1 && lastPressed != -1){
                buttonClicks += ' '
            }

            if(timesPressed != -1 && nextLetter == key){
                buttonClicks += ' '
            }

            if(timesPressed != -1){
                for(let i = 0; i <= timesPressed; i++){
                    buttonClicks += key
                }
            }

            if(letter == key){
                buttonClicks += (key + '-');
            }

            if(nextPress != -1 && key.match(/0|\*| /g) && changedCase){
                changedCase = false;
                holdCase = true;
            } else if((nextPress != -1 && !key.match(/0|\*| /g) && holdCase)){
                changedCase = true;
                holdCase = false;
            } else if(holdCase){
                changedCase = false;
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
// console.log(sendMessage('hey')); // 
// console.log(sendMessage('one two three')); // "666 6633089666084477733 33"
// console.log(sendMessage('Hello World!')); //"#44#33555 5556660#9#66677755531111"
// console.log(sendMessage('Def Con 1!')) //#3#33 3330#222#666 6601-1111"
// console.log(sendMessage('A-z')); //#2**#9999
// console.log(sendMessage('I love you')); // #4440#55566688833099966688
// console.log(sendMessage('LOL xD')); //#5556665550#99#3
// console.log(sendMessage('#NotMyPresident')) //#-#66#6668#6#999#7#7773377774443 33668
// console.log(sendMessage('a2D3')); // 2 2-#3 3-
// console.log(sendMessage('IDontNeedSpaceWhenICanCapitalizeFirstLetter')) //#4443#666 668#66#33 33 3#7777#72 22233#9#443366#444222#266#222#2744482555444999933#333#444777 77778#555#338 833777
console.log(sendMessage('WHY DOES THIS TEXT LOOK SO BIG???'))
// #944999036663377770844 444777708339980555666 6665507777666022444 4111 111 111