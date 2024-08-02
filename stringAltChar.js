// given 2 string a and b. check string b is contain all the char of a
// given input: a = "Hello"   b = "olleh" => output should True
// given input: a = "Java"   b = "vaj" => output should false
// given input: a = "Javascript"   b = "JaPyscript" => output should False

const checkSameChar = (a, b) => {

    if (a.length > b.length) return false;

    let result = 0;
    let str1 = a.toLowerCase().split('')
    let str2 = b.toLowerCase().split('')

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                // str2 = str2.filter((e) => e !== str1[i]);
                str2.splice(j, 1)
                result = result + 1;
            } else {
                continue
            }
        }
    }
    if (str1.length === result) return true;

    return false
}

console.log(checkSameChar("java", "vaja"))  //output: ture
console.log(checkSameChar("First", "ritsyuf"))  //output: ture
console.log(checkSameChar("Javascript", "JaPyscript"))  //output: false
console.log(checkSameChar("Hello", "olleh"))  //output: true
console.log(checkSameChar("java", "javc"))  //output: false
