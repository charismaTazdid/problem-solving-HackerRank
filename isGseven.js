

function isGseven(num) {

    let dif = num - 7;
    if (dif < 7) {
        return dif;
    }
    else {
        return num * 2;
    }
}

console.log(isGseven(6)) //output: -1
console.log(isGseven(-15)) //output: -22
console.log(isGseven(15)) //output: 30