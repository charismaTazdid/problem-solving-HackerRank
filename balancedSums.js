// Problem: https://www.hackerrank.com/challenges/sherlock-and-array/

function balancedSums(arr) {
    let rightsum = arr.reduce((a, b) => a + b);
    let leftsum = 0;
    for (let i = 0; i < arr.length; i++) {
        rightsum -= arr[i];
        if (leftsum == rightsum) return "YES";
        leftsum += arr[i];
    }
    return "NO";
}