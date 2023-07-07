// Problem: https://www.hackerrank.com/challenges/separate-the-numbers

function separateNumbers(s) {

    if (s.length > 0) {
        const maxDigit = Math.floor(s.length / 2);

        let digitCombination = 1
        let match = false;

        while (digitCombination <= maxDigit) {

            let number = s.slice(0, digitCombination);
            let initialNum = BigInt(number).toString();
            let firstNumber = BigInt(number);

            let newString = '';

            while (newString.length < s.length) {
                newString = newString + `${firstNumber.toString()}`;
                firstNumber += BigInt(1);
            }

            digitCombination++;

            if (newString === s) {
                console.log(`YES ${initialNum}`);
                match = true;
                break;
            }
        }
        match === false ? console.log('NO') : match
    }
}