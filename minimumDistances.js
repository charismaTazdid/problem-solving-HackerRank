//Problem Link : https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
    // Write your code here
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                let diff = j - i;
                result.push(diff)
            }
        }
    };
    if (result.length) return Math.min(...result)

    return -1;

}


// OR


function minimumDistances(a) {
    let distances = [];
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
            let minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
            distances.push(minDistance);
        }
    }
    if (distances.length === 0) {
        return -1;
    } else {
        //    return Math.min(...distances)
        distances.sort((a, b) => {
            return a - b;
        })
        return distances[0];
    };
}
