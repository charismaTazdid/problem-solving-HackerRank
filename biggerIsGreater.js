// Problem: https://www.hackerrank.com/challenges/bigger-is-greater

function biggerIsGreater(w) {
    // Write your code here    
    w = w.split('')
    for (let i = w.length - 2; i >= 0; i--) {
        let after = w.slice(i + 1, w.length)
        after.sort((a, b) => a > b ? 1 : -1)
        let max = after.find((e) => e > w[i])
        if (max) {
            let past = w.slice(0, i), after = w.slice(i)
            after.splice(after.findIndex((e) => e === max), 1)
            after.sort((a, b) => a > b ? 1 : -1)
            return past.join('') + max + after.join("")
        }
    }
    return 'no answer'
}