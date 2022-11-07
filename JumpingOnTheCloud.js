//Problem Description here: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let count = 0;
    for (let i = 0; i < c.length - 1; count++) {
        if (!!c[i + 2]) i++;
        else i += 2;
    }
    return count;

};