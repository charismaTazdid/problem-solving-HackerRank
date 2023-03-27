// Problem : https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

function getMoneySpent(keyboards, drives, b) {

    const possibleCombinations = [];
    // get all the possible combinations.
    for (let i = 0; i < drives.length; i++) {
        for (let j = 0; j < keyboards.length; j++) {
            possibleCombinations.push(drives[i] + keyboards[j]);
        }
    }
    // sort it in decending order.
    possibleCombinations.sort((a, b) => b - a);
    // determine each combination if they fit the budget.
    for (let i = 0; i < possibleCombinations.length; i++) {
        if (possibleCombinations[i] <= b) {
            return possibleCombinations[i];
        }
    }
    return -1;
}

// Done 