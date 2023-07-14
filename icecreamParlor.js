// Problem: https://www.hackerrank.com/challenges/icecream-parlor/

function icecreamParlor(m, arr) {
    // Write your code here
    let results = {};

    for (let i = 0; i <= arr.length; i++) {
        if (results.hasOwnProperty(arr[i])) {
            return [results[arr[i]] + 1, i + 1]
        }

        results[m - arr[i]] = i;
    }
}