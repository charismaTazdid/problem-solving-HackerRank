// Problem: https://www.hackerrank.com/challenges/countingsort2

function countingSort(arr) {
    const result = []
    const temp = Array.from(Array(100)).fill(0);
    arr.forEach(a => {
        temp[a]++;
    })
    for (let i = 0; i < 100; i++) {
        if (temp[i] === 0) { }
        else {
            for (let j = 0; j < temp[i]; j++) {
                result.push(i)
            }
        }
    }
    return result;
}