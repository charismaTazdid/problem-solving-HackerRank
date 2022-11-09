/*
  1. INTEGER i
  2. INTEGER j
  3. INTEGER k
  Problem Description: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

function beautifulDays(i, j, k) {
    let result = 0;
    for (let index = i; index <= j; index++) {
        let reverseNumber = index.toString().split("").reverse().join("");
        let diffarance = index - parseInt(reverseNumber);
        if (diffarance % k === 0) {
            result = result + 1;
        }
    }
    return result;
};

// OR (not recomanded)

function beautifulDays(i, j, k) {
    let result = 0;
    for (let index = i; index <= j; index++) {
        let n = index + ""
        let reverseN = parseInt(n.split("").reverse().join(""));
        let d = (n - reverseN) / k;
        if (d % 1 == 0) {
            result = result + 1
        }

    }
    return result;
}