// Problem: https://www.hackerrank.com/challenges/funny-string/

function funnyString(s) {
    // Write your code here
    let n = s.length;
    for (let i = 1; i < n; i++) {
        let diff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        let diff2 = Math.abs(s.charCodeAt(n - i) - s.charCodeAt(n - i - 1));
        if (diff1 !== diff2) {
            return "Not Funny";
        }
    }
    return "Funny";

}