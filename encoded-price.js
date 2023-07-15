
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



// Price Decode
export const decodePrice = (str) => {
    const codeMap = {
        'X': '0', 'Y': '1', 'W': '2', 'A': '3',
        'T': '4', 'C': '5', 'S': '6',
        'Q': '7', 'J': '8', 'P': '9'
    };

    const dressCodeLength = 7;
    const encodedDigits = str.slice(dressCodeLength);
    const decodedDigits = encodedDigits
        .split('')
        .map(encodedDigit => codeMap[encodedDigit])
        .join('');

    const arr = str.slice(0, 6).split("");
    const dressCode = arr.filter((char) => char !== "0" && char !== "1").join("");
    return { dressCode: dressCode, price: Number(decodedDigits) };
};

export const decodePrices = (encodedBuyingPrice, encodedSellingPrice) => {
    const dressCodeLength = 3;
    const buyingPrice = decodePrice(encodedBuyingPrice.slice(dressCodeLength));
    const sellingPrice = decodePrice(encodedSellingPrice.slice(dressCodeLength));

    return {
        buyingPrice,
        sellingPrice
    };
};

// const encodedPrices = encodePrices(3980, 4675, 'SHI');
// console.log(encodedPrices);
// Output: { buyingPrice: 'SHI11010APJX', sellingPrice: 'SHI10100TSQC' }
// const decodedPrices = decodePrices('SHI11010APJX', 'SHI10100TSQC');
// Output: { buyingPrice: 3980, sellingPrice: 4675 }


// Helper: Decode DressCode
const findDressCode = (str) => {
    const arr = str.slice(0, 6).split("");
    const dressCode = arr.filter((char) => char !== "0" && char !== "1").join("");
    return dressCode;
};