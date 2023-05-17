// Problem:  https://www.hackerrank.com/challenges/chocolate-feast

function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n / c);
    let wrappers = chocolates;

    while (wrappers >= m) {
        let additionalChocolates = Math.floor(wrappers / m);
        chocolates += additionalChocolates;
        wrappers = wrappers % m + additionalChocolates;
    }

    return chocolates;
}
