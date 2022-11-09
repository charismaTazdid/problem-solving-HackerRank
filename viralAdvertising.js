// Problem Description: https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let totalLike = Math.floor(5 / 2);
    let nextDayMarketer = Math.floor(5 / 2);

    for (let i = 2; i <= n; i++) {
        totalLike = Math.floor((nextDayMarketer * 3) / 2) + totalLike;
        nextDayMarketer = Math.floor((nextDayMarketer * 3) / 2);
    };
    return totalLike;

};

console.log(viralAdvertising(5)) //output: 4
console.log(viralAdvertising(3)) //output: 9