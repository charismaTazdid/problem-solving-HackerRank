// Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

const candlesHight = [3, 4, 3, 5, 7, 8, 7,];  // Expected Output: 1

function birthdayCakeCandles(candles) {
    let count = 0;
    const maxCandle = Math.max(...candles);
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxCandle) {
            count++
        }
    };
    return count;
};

console.log(birthdayCakeCandles(candlesHight))
//Done