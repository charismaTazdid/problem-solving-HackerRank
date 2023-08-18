// Problem: https://www.hackerrank.com/challenges/pairs


const pairs = (k, arr) => arr.map((num, index) => {
    let count = 0
    for (let j = index + 1; j < arr.length; j++) {
        if (Math.abs(num - arr[j]) == k) count++
    }
    return count
}).reduce((a, b) => a + b)