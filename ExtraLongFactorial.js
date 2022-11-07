//Problem Description here: https://www.hackerrank.com/challenges/extra-long-factorials/problem


function extraLongFactorials(n) {
    const factorial = (int) => {
        const bigInt = BigInt(int)
        return bigInt === 0n ? 1n : bigInt * factorial(bigInt - 1n)
    }
    console.log(factorial(n).toString())
}
