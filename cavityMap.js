// Problem: https://www.hackerrank.com/challenges/cavity-map

const cavityMap = (grid) => {
    const X = "X";
    let newArr = grid.slice();
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {
            let point = grid[i][j];
            if (point > grid[i][j - 1] && point > grid[i][j + 1] &&
                point > grid[i - 1][j] && point > grid[i + 1][j]) {
                newArr[i] = newArr[i].substring(0, j).concat(X.concat(newArr[i].substring(j + 1)));
            }
        }
    }
    return newArr;
}