//problem limk: https://www.hackerrank.com/challenges/compare-the-triplets/problem


function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            aliceScore = aliceScore + 1;
        }
        if(a[i] < b[i]){
            bobScore = bobScore + 1
        }
    }
    return [aliceScore, bobScore]

}
const alice = [5, 6, 7]
const bob = [3, 6, 10]
console.log(compareTriplets(alice, bob))