
const generateRandomBinary = (number) => {
    let result = '';
    for (let i = 0; i < number; i++) {
        const randomBit = Math.round(Math.random());
        result += randomBit;
    }
    return result;
}

const encodePrice = (price, dressCode = "") => {

    const maxCodeLength = 12;
    const dressCodeLength = dressCode.length;

    const codeMap = {
        '0': 'X', '1': 'Y', '2': 'W', '3': 'A',
        '4': 'T', '5': 'C', '6': 'S',
        '7': 'Q', '8': 'J', '9': 'P'
    };

    const digits = price.toString().split('');

    const encodedDigits = digits.map(digit => codeMap[digit]).join('');

    const randomBinaryLength = maxCodeLength - (encodedDigits.length + dressCodeLength);
    const randomBinary = generateRandomBinary(randomBinaryLength);

    return dressCode + randomBinary + encodedDigits;
};

const encodePrices = (buyingPrice, sellingPrice, dressCode) => {

    return {
        buyingPrice: encodePrice(buyingPrice, dressCode),
        sellingPrice: encodePrice(sellingPrice, dressCode)
    };
};

const test = encodePrices(398, 467, "SHI");
console.log(test)