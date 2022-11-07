//Problem Description here: https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
    let digitArray = n.toString().split("");
    let result = 0;
    for (let i = 0; i < digitArray.length; i++) {
        if (n % digitArray[i] === 0) {
            result += 1
        }
    };
    return result;


};