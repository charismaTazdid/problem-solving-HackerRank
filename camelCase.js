// Problem : https://www.hackerrank.com/challenges/camelcase/

function camelcase(s) {
    // spliting the string on uppercase letters.
    let str = s.split(/(?=[A-Z])/);
    // counting and returning the words after the split.
    return str.length
}