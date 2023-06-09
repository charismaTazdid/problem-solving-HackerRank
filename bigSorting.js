// Problem : https://www.hackerrank.com/challenges/big-sorting/

// One Liner
function bigSorting(unsorted) {
    return unsorted.sort((a, b) => String(BigInt(a) - BigInt(b)))
}