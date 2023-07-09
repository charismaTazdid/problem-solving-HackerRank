// Problem: https://www.hackerrank.com/challenges/quicksort1/

function quickSort(arr) {
    const [left, equal, right] = [[], arr[0], []];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < equal ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...left, equal, ...right];
}