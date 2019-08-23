var freewayGame = function (distKmToExit, mySpeedKph, otherCars) {
    let score = 0;
    let timeToExit = (distKmToExit / mySpeedKph) * 60;
    console.log('OUR TIME: ', timeToExit);

    otherCars.forEach((opponent, i) => {
        let opponentTimeToExit = ((distKmToExit / opponent[1]) * 60) + opponent[0];

        console.log(`Car ${i} Time: ${opponentTimeToExit}`);
        if (!((opponent[0] < 0 && opponent[1] > mySpeedKph) || (opponent[0] > 0 && opponent[1] < mySpeedKph) || mySpeedKph == opponent[1])) {
            (opponentTimeToExit < timeToExit) ? score-- : score++;
        }
    });

    return score;
}

// console.log(freewayGame(50.0, 130.0, [[-1.0, 120.0], [-1.5, 120.0]])) // 2
// console.log(freewayGame(50.0, 110.0, [[1.0, 120.0], [1.5, 125.0]])) // -2
// console.log(freewayGame(50.0, 120.0, [[-1.0, 115.0], [-1.5, 110.0], [1.0, 130.0], [1.5, 130.0]])) // 0
// console.log(freewayGame(30.0, 100.0, [[-1.0, 110.0], [-0.7, 102.0], [-1.5, 108.0]])) // 0
// console.log(freewayGame(50, 110, [[-1, 110], [0.5, 110], [1, 110], [1.5, 110]])); // 0
console.log(freewayGame(50, 130, [[-0.9430521484239325, 123.7144583442872], [-0.3246920225345722, 127.13059021505268], [2.400423986305822, 124.368246356317], [2.618484575508047, 132.60648822424702], [-2.6834144083822964, 132.87284243998872]])); // 2