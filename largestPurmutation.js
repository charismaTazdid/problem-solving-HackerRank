// Problem: https://www.hackerrank.com/challenges/largest-permutation

const largestPermutation = (k, arr) => {
    let n = arr.length
    for (var i = 0; i < n - 1; i++) {
        if (k > 0) {
            var max = i;
            for (var j = i + 1; j < n; j++) {
                if (arr[j] > arr[max])
                    max = j;
            }
            if (max != i) {
                var temp = arr[max];
                arr[max] = arr[i];
                arr[i] = temp;
                k--;
            }
        }
    }

    return arr
}