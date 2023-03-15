// Problem : https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem?isFullScreen=true


function processData(input) {

    let inputArray = input.split(" ");

    let cost_of_a = 160 + (40 * (Math.pow(parseFloat(inputArray[0]), 2) + parseFloat(inputArray[0])));
    let cost_of_b = 128 + (40 * (Math.pow(parseFloat(inputArray[1]), 2) + parseFloat(inputArray[1])));

    console.log(cost_of_a.toFixed(3), "\n", cost_of_b.toFixed(3));
}

