//Problem Link: https://www.hackerrank.com/challenges/repeated-string/problem


//solution 1
function repeatedString(s, n) {
    const repeated = Math.floor(n / s.length)
    const remainStr = s.substring(0, n - (repeated * s.length))
    let aRemainCount = 0
    for (let i = 0; i < remainStr.length; i++) {
        if (remainStr[i] === 'a') {
            aRemainCount++
        }
    }
    let aCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCount++
        }
    }
    return aCount * repeated + aRemainCount
}

//solution 2

function repeatedString(s, n) {
    let occurances = (s.split("a").length - 1);
    let max = Math.floor(n / s.length);
    let totalAs = occurances * max;
    totalAs += (s.slice(0, n % s.length).split("a").length - 1);
    return totalAs;
}