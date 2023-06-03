// Problem: https://www.hackerrank.com/challenges/strange-code

function strangeCounter(t) {

    if (t <= 3) {
        return (3 - t + 1)
    }
    let cur = 3;
    let index = 0;
    while (3 * cur < t) {
        cur = 1 + 2 * cur;
        index++;
    }
    let curUpdate = cur * 3;
    let tmp = curUpdate - t;
    return (tmp + 1);
}