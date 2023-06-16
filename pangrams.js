// Problem: https://www.hackerrank.com/challenges/pangrams/


function pangrams(s) {
    const arr = s.toLowerCase().split('')
    let unique = [...new Set(arr)];
    return unique.length < 27 ? 'not pangram' : 'pangram'
}