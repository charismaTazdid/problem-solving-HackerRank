// Problem : https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true

function permutationEquation(p) {
    // Write your code here
    let arr = [];
    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < p.length; j++) {
            //  console.log(i+1, p[p[j] - 1])
            if (i + 1 === p[p[j] - 1]) {
                arr.push(j + 1)
                //  console.log(j + 1)
            }

        }
    }
    return arr;
}