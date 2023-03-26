// Problem : https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) {
        return 'YES'
    }
    if (x1 > x2 || v1 <= v2) {
        return 'NO'
    }
    return kangaroo(x1 + v1, v1, x2 + v2, v2);
}
// Done