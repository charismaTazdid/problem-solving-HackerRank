//Problem Description here: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let count = 0;
    for (let i = 0; i < c.length - 1; count++) {
        if (!!c[i + 2]) {
            i++;
        }
        else i += 2;
    }
    return count;

};

// OR
function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < c.length - 1; count++) {
        if (c[i + 2] != 0) i++;
        else i += 2;
    }
    return count;
};

// OR
function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < c.length - 1;) {
        if (c[i + 2] != 0) {
            count = count + 1;
            i++;
        }
        else {
            count = count + 1;
            i += 2;
        }
    }
    return count;
};

// OR
function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < c.length - 1;) {
        if (c[i + 2] == 0) {
            count = count + 1
            i += 2
        }
        else {
            count = count + 1
            i++
        }

    }
    return count;
};

//the double exclamation operator converts an Object to Boolean. This happens such that “falsy” objects become false and “truthy” objects become true.