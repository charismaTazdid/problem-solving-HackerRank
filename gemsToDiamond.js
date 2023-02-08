

function gemsToDiamond(num1, num2, num3) {

    let firstFriendDiamond = num1 * 21;
    let secondFriendDiamond = num2 * 32;
    let thirdFriendDiamond = num3 * 43;

    let totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

    if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}

console.log(gemsToDiamond(1, 1, 1)) //Output: 96
console.log(gemsToDiamond(100, 15, 31)) //Output: 1913
