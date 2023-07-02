// Problem: https://www.hackerrank.com/challenges/the-love-letter-mystery


function theLoveLetterMystery(s) {

    let n = s.length;
    let count = 0
    for (let i = 0; i < n / 2; i++) {
        count += Math.abs(s[i].charCodeAt() - s[n - i - 1].charCodeAt())
    }
    return count;

}