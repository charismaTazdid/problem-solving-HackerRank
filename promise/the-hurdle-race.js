// Problem: https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true



function hurdleRace(k, height) {
    let result = 0;
    height.sort((a, b) => b - a);
    if (height[0] > k) {
        result = height[0] - k;
    } else {
        result = 0;
    }
    return result;
}