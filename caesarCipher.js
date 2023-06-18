// Problem: https://www.hackerrank.com/challenges/caesar-cipher-1/

function caesarCipher(s, k) {
    // Write your code here
    const alphabetU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let char = [...s]
    let i = 0
    while (i < char.length) {
        if (/[a-z]/g.test(char[i])) char[i] = alphabet[(alphabet.indexOf(char[i]) + k) % alphabet.length]
        if (/[A-Z]/g.test(char[i])) char[i] = alphabetU[(alphabetU.indexOf(char[i]) + k) % alphabetU.length]
        i++
    }
    console.log(char.join(''))
    return (char.join(""))
}