// Problem : https://www.hackerrank.com/challenges/beautiful-triplets/problem?isFullScreen=true

function beautifulTriplets(d, arr) {
    let i, j, k
    let triplets = []
    arr.forEach((x) => {
        i = x
        j = arr.filter((y) => y === i + d)[0]
        k = arr.filter((z) => z === j + d)[0]
        if ((j && k) !== undefined) triplets.push([i, j, k])
    })
    return triplets.length
}