// Input a string and converts upper case letters to lower and lower case letters to uppercase.
// given input: AaBbcC
// expected output: aAbBCc

// solve with regx
const swapcase = (str) => {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbcC'));

//solve with for loop
const swapcase2 = (str) => {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            result = result + str[i].toUpperCase()
        }
        else {
            result = result + str[i].toLowerCase()
        }
    }
    return result;
}

console.log(swapcase2('AaBbcC'));