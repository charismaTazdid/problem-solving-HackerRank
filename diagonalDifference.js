
//Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true


function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    let dia1 = 0;
    let dia2 = 0;
    for (let i = 0; i < n; i++) {
        dia1 += arr[i][i];
        dia2 += arr[n - 1 - i][i]
    }
    return Math.abs(dia1 - dia2)
}


//OR 

function diagonalDifference(arr) {
    const n = arr.length;
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // finding the sum of primary diagonal
            if (i === j) {
                diagonal1 += arr[i][j];
            }
            // finding the sum of secondary diagonal
            if (i + j === n - 1) {
                diagonal2 += arr[i][j];
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2);
}