// Problem: https://www.hackerrank.com/challenges/beautiful-binary-string

function beautifulBinaryString(b) {

    let count = 0;
    for (let i = 1; i < b.length - 1; i++) {
        if (b[i - 1] === '0' && b[i] === '1' && b[i + 1] === '0') {
            count++;
            i += 2;
        }
    }
    return count;
}