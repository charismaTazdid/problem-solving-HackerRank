// Problem: https://www.hackerrank.com/challenges/mars-exploration

function marsExploration(s) {
    // Write your code here
    let number = 0;

    for (let i = 0; i < s.length; i += 3) {
        if (s.charAt(i) != "S") {
            number++
        };
        if (s.charAt(i + 1) != "O") {
            number++
        };
        if (s.charAt(i + 2) != "S") {
            number++
        };

    }
    return number

}