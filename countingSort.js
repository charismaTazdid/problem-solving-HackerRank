function countingSort(arr) {
    let size = arr.length < 101 ? arr.length : 100
    let ans = new Array(size).fill(0)
    arr.map(x => ans[x]++ )
    return ans   
}


//problem link: https://www.hackerrank.com/challenges/countingsort1/problem