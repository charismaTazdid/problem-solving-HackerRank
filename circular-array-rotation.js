
// Problem: https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true


function circularArrayRotation(a, k, queries) {
    for (let i = 0; i < k; i++) {
        const last = a.pop();
        a.unshift(last);
    }
    return queries.map(index => a[index]);
}