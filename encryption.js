// Problem: https://www.hackerrank.com/challenges/encryption/

function encryption(s) {
    let arr = s.split('')
    let encrypted = ''
    let lebar = Math.ceil(Math.sqrt(arr.length))
    for (let i = 0; i < lebar; i++) {
        if (encrypted) {
            encrypted += ' '
        }
        for (let j = i; j < arr.length; j += lebar) {
            encrypted += s[j]
        }
    }
    return (encrypted)
}