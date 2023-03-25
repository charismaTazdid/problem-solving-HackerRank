// Problem: https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true


function countingValleys(steps, path) {
    let valleys = 0;
    let level = 2;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level += 1;

            if (level === 2) {
                valleys += 1;
            }
        } else if (path[i] === 'D') {
            level -= 1;
        }
    }

    return valleys;
}
//Done