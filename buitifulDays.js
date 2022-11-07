/*
 * Complete the 'beautifulDays' function below.
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 * Problem Description: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

function beautifulDays(i, j, k) {
    // Write your code here
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