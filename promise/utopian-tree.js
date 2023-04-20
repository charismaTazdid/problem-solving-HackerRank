// Problem: https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true


function utopianTree(n) {
    let height = 0;

    // Starts from zero and does calculation on the last.
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) { // If even number, add 1 to the previous number.
            height += 1;
        } else { // If odd number, multiply 1 to the previous number.
            height *= 2;
        }
    }

    return height;
}