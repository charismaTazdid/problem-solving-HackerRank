function solution(name, number, typeInput) {
    let result = [];
    let finalDarling = '';

    number.map(num => {
        let matchd = num.match(typeInput);

        if (matchd != null) {
            let numIndex = number.indexOf(num);
            let dar = name[numIndex]
            result.push(dar)
        }
        return;
    })

    if (result.length) {
        finalDarling = result.reduce((a, b) => a.length <= b.length ? a : b);
    } else {
        finalDarling = 'NO CONTACT'
    }

    return finalDarling;
};

const darling = ['nafisa', 'natasha', 'nowtun'];
const darlingNum = ['233', '56234', '5776'];
console.log(solution(darling, darlingNum, '2'))