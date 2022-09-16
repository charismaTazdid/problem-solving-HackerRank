function pickingNumbers(a) {
    return a.reduce((count,val) => {
        // count occurance of each number
        count[val]++
        return count;
    }, new Array(100).fill(0))
        .reduce((max, val, index, count) =>{
        // max number of integers such that the absolute 
        // difference between any two is 1
        if (max < val + count[index + 1]){
                max = val + count[index + 1];
        }
        return max;
    }, 0);
}


//problem link: https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true