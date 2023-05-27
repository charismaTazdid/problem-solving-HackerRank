// Problem: https://www.hackerrank.com/challenges/fair-rations/

function fairRations(B) {
    let n = 0;
    for (let i = B.length - 1; i >= 1; i--) {
        if (B[i] % 2 !== 0) {
            B[i] += 1;
            B[i - 1] += 1;
            n += 2;
        }
    }

    return B[0] % 2 == 0 ? n : "NO";
}