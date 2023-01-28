//Problem Link: https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true

function lilysHomework(arr) {
    // Write your code here
    const x = [...arr].sort((a, b) => a - b)
    const s = (a) => {
        const map = new Map()
        a.forEach((v, i) => map.set(v, i))
        let p = 0
        for (let [i, e] of a.entries()) {
            if (e !== x[i]) {
                p++
                const j = map.get(x[i])
                map.set(e, j)
                a[j] = e
            }
        }
        return p
    }
    return Math.min(s([...arr]), s(arr.reverse()));
};


