// Problem: https://www.hackerrank.com/challenges/manasa-and-stones

function stones(n, a, b) {
    let m1 = n - 1;
    let m2 = 0;
    let possibleValues = [];
    while (m1 > 0) {
        possibleValues.push(m1 * a + m2 * b);
        possibleValues.push(m1 * b + m2 * b);
        m1--;
        m2++;
    }

    return [...new Set(possibleValues)].sort((a, b) => a - b);
}