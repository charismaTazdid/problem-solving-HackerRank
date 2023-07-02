// Problem: https://www.hackerrank.com/challenges/two-strings/

function twoStrings(s1, s2) {
    const map1 = {};
    const map2 = {};
    let i = 0;
    while (s1[i] || s2[i]) {
        if (map2[s1[i]] || map1[s2[i]]) {
            return 'YES';
        }
        if (s1[i]) map1[s1[i]] = true;
        if (s2[i]) map2[s2[i]] = true;
        i++;
    }
    return 'NO';
}