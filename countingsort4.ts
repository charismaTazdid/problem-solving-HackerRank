// Problem : https://www.hackerrank.com/challenges/countingsort4/problem

function countingSort(arr: number[]): number[] {
    return arr.slice(0, 100).map((_, idx) => arr.reduce((acc, curr) => curr === idx ? ++acc : acc, 0))
}