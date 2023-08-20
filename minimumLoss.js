// Problem: https://www.hackerrank.com/challenges/minimum-loss

function minimumLoss(prices) {
    const map = {}
    for (let i = 0; i < prices.length; i++) map[prices[i]] = i

    prices.sort((a, b) => b - a)

    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < prices.length; i++) {
        let pointer = i + 1
        let sub = prices[i] - prices[pointer]
        let indAct = map[prices[i]], indPointer = map[prices[pointer]]
        if (sub >= 0 && sub < min && indAct < indPointer) min = sub
    }
    return min
}