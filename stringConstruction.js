
// Problem: https://www.hackerrank.com/challenges/string-construction/

function stringConstruction(s) {
    let [i, sLength, cost] = [0, s.length, 0];
    while (i < sLength) {
        if (!s.slice(0, i).includes(s[i])) cost++;
        i++;
    }
    return cost;
}
// Done


// using one Liner
function stringConstruction(s) {
    return new Set(s).size;
}