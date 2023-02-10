// Problem: https://www.hackerrank.com/challenges/s10-geometric-distribution-1/problem?isFullScreen=true

function processData(input) {
    //Enter your code here
    let p = (1 / 3);
    let n = 5;
    let q = (2 / 3);
    let result = Math.pow(q, n - 1) * p;
    console.log(result.toFixed(3));
} 