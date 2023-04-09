// Problem: https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function pageCount(n, p) {

    let half = Math.floor(n / 2);
    let turn = Math.floor(p / 2);

    if (turn < half - turn) {
        return turn;
    }
    else {
        return half - turn;
    };
};
