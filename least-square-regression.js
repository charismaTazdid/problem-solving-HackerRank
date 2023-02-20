// Probelm: https://www.hackerrank.com/challenges/s10-least-square-regression-line/problem?isFullScreen=true

function processData(input) {
    //Enter your code here
    const myInputs = input
        .split("\n")
        .map(i => i.split(' '))
        .reduce((a, b) => a.concat(b))
        .map(i => parseInt(i));

    const Xs = myInputs
        .filter((i, index) => {
            if (index == 0 || index % 2 == 0) {
                return i
            }
        })
    const Ys = myInputs
        .filter((i, index) => {
            if (index % 2 > 0) {
                return i
            }
        })

    const sumX = Xs.reduce((a, b) => a + b)
    const sumY = Ys.reduce((a, b) => a + b)
    const sumXY = Xs.map((a, index) => a * Ys[index]).reduce((a, b) => a + b)
    const sumXSquared = Xs.map(i => Math.pow(i, 2)).reduce((a, b) => a + b)
    const n = Xs.length;

    const xMean = sumX / n
    const yMean = sumY / n

    const b =
        ((sumXY * n) - (sumX * sumY))
        /
        ((n * sumXSquared) - Math.pow(sumX, 2))

    const a = yMean - (b * xMean)

    const regressionLineFindY = (a, b, x) => a + (b * x)
    console.log(regressionLineFindY(a, b, 80))
}
