// Problem : https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem?isFullScreen=true


function processData(input) {
    //Enter your code here
    let value = input.split(" ");
    let ca = 160 + (40 * (Math.pow(parseFloat(value[0]), 2) + parseFloat(value[0])));
    let cb = 128 + (40 * (Math.pow(parseFloat(value[1]), 2) + parseFloat(value[1])));
    console.log(ca.toFixed(3), "\n" , cb.toFixed(3));
} 
