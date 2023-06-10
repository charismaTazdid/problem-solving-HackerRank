// Problem: https://www.hackerrank.com/challenges/strong-password

function minimumNumber(n, password) {
    let total = 0;
    let missingCharacter = 0;
    if (n < 6) missingCharacter = 6 - n;
    if (!/[0-9]/g.test(password)) total += 1;
    if (!/[a-z]/g.test(password)) total += 1;
    if (!/[A-Z]/g.test(password)) total += 1;
    if (!/[!@#$%^&*()\-+]/.test(password)) total += 1;
    return total > missingCharacter ? total : missingCharacter;
}