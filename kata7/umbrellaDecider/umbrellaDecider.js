let takeUmbrella = (weather, chance) => chance > 0.5 ? true : weather == 'rainy' ? true : weather == 'sunny' ? false : chance > 0.2 ? true : false;

console.log(takeUmbrella('sunny', 0.4)) // false
console.log(takeUmbrella('rainy', 0)) // true
console.log(takeUmbrella('cloudy', 0.2)) // false