function getMaxLessThanK(n, k) {
    let max_anb = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b-1; a > 0; a--) {
            if ((a & b) < k && (a & b) > max_anb){
                max_anb = (a&b);
            }
        }
    }
    return max_anb;
}

//problem link: https://www.hackerrank.com/challenges/js10-bitwise/problem?isFullScreen=true