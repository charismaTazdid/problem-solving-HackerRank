// Problem : https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem?isFullScreen=true


function processData(input) {
    // Split the input string into an array of strings
    let inputArray = input.split(" ");

    // Calculate the value of ca using the input values and a formula
    let cost_of_a = 160 + (40 * (Math.pow(parseFloat(inputArray[0]), 2) + parseFloat(inputArray[0])));

    // Calculate the value of cb using the input values and a formula
    let cost_of_b = 128 + (40 * (Math.pow(parseFloat(inputArray[1]), 2) + parseFloat(inputArray[1])));

    // Print the values of ca and cb with 3 decimal places
    console.log(cost_of_a.toFixed(3), "\n" , cost_of_b.toFixed(3));
}

