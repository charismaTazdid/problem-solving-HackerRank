// Problem: https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true

function appendAndDelete(s, t, k) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) break;
    };
    let z = (s.length + t.length) - (i * 2);
    if (k >= s.length + t.length) return 'Yes'
    else if (z % 2 === k % 2 && z <= k) return 'Yes';
    else return 'No';
};