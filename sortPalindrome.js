function shortPalindrome(s) {
    const a1 = Array(26).fill(0), a2 = a1.slice()
    const a3 = Array(26 * 26).fill(0)
    let c = 0
    const m = 1000000007
    for (const k of s) {
        const ord = k.charCodeAt(0) - 'a'.charCodeAt(0)
        let ordm = ord
        c = (c + a2[ord]) % m
        for (let i = 0; i < 26; i++) {
            a2[i] = (a2[i] + a3[ordm]) % m   
            a3[ordm] = (a3[ordm] + a1[i]) % m
            ordm += 26
        }
        a1[ord]++
    }
    return c
}


//prblem link: https://www.hackerrank.com/challenges/short-palindrome/problem?isFullScreen=true