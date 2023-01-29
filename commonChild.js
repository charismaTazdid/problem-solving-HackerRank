//Problem Link: https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true


const memo = new Array(s1.length + 1).fill(0);

for (let i = 1; i <= s1.length; ++i) {
    let prev = 0;
    for (let j = 1; j <= s2.length; ++j) {
        const temp = memo[j];
        if (s1[i - 1] === s2[j - 1]) {
            memo[j] = prev + 1;
        }
        else {
            memo[j] = Math.max(memo[j], memo[j - 1]);
        }
        prev = temp;
    }
}
return memo[s1.length];