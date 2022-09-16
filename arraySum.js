function simpleArraySum(ar) {
    let sum = 0
    for (var i = 0; i < ar.length; i++) {
        sum = sum + ar[i]
        
    }
    return sum;
}

const arr = [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(arr))