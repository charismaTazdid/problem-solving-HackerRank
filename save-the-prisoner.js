// Problem: https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true

function saveThePrisoner(n, m, s) {
    return (s - 1 + m) % n === 0 ? n : (s - 1 + m) % n;
}