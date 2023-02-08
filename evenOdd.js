

function evenOdd(str) {

    let charNum = str.length;
    if ((charNum % 2) == 0) {
        return "even"
    }
    else {
        return "odd"
    }
};

console.log(evenOdd("phero")) //odd
console.log(evenOdd("batch7")) // even
