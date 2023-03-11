// Problem: https://www.hackerrank.com/challenges/s10-the-central-limit-theorem-3/problem?isFullScreen=true

function processData(input) {
    //Enter your code here
    let arr = input.split(/[\n]/g);
    let a = parseFloat(arr[1]) - parseFloat(arr[4]) * parseFloat(arr[2]) / Math.sqrt(parseInt(arr[0]));
    let b = parseFloat(arr[1]) + parseFloat(arr[4]) * parseFloat(arr[2]) / Math.sqrt(parseInt(arr[0]));
    console.log(a.toFixed(2));
    console.log(b.toFixed(2));



}