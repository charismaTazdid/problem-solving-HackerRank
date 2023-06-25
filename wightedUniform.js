// Problem: 

function weightedUniformStrings(s, queries) {
    let weighU = [];
    let base = 'a'.charCodeAt() - 1;
    let previousChar;
    let weigthChar = 0;
    let result = [];

    // Write your code here    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== previousChar) {
            previousChar = s[i];
            weigthChar = 1;
        } else {
            weigthChar++;
        }

        weighU.push((s[i].charCodeAt() - base) * weigthChar);
    }

    result = queries.map((w) => (weighU.indexOf(w) != -1) ? "Yes" : "No");

    return result;
}