// https://www.hackerrank.com/challenges/hackerrank-in-a-string

function hackerrankInString(s) {
    const STRING_MATCH = "hackerrank";
    let matchIdx = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === STRING_MATCH[matchIdx])
            matchIdx += 1;
    }
    return matchIdx === STRING_MATCH.length ? "YES" : "NO";
}