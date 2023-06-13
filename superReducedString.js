// Problem: https://www.hackerrank.com/challenges/reduced-string


function superReducedString(s) {
    // Write your code here
    const regex = /(\w)\1/g;

    if (regex.test(s)) {
        s = s.replaceAll(regex, "");
        return superReducedString(s);
    }

    return s || "Empty String";
}