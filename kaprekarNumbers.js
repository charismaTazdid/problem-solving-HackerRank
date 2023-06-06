// Problem: https://www.hackerrank.com/challenges/kaprekar-numbers

function kaprekarNumbers(p, q) {
    let k = []
    for (let i = p; i <= q; i++) {
        let j = (i ** 2).toString()
        let x = Math.floor(j.length / 2)
        j = [j.slice(0, x), j.slice(x)]
            .map(Number)
            .reduce((a, b) => a + b)
        if (i === j) k.push(i)
    }
    k.length !== 0
        ? console.log(k.join(' '))
        : console.log('INVALID RANGE')
}

