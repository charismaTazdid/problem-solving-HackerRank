// Problem: https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true


function formingMagicSquare(s) {
    const possibleMagicSqure = [
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    ];

    let tempCost = 0;
    let cost = 99;

    for (let i = 0; i < possibleMagicSqure.length; i++) {
        for (let j = 0; j < possibleMagicSqure[i].length; j++) {
            for (let k = 0; k < possibleMagicSqure[i][j].length; k++) {
                if (possibleMagicSqure[i][j][k] === s[j][k]) {
                    continue;
                } else {
                    tempCost += Math.abs(possibleMagicSqure[i][j][k] - s[j][k])
                }
            }
        }
        if (cost > tempCost) {
            cost = tempCost;
        }
        tempCost = 0;
    }
    return cost;
}