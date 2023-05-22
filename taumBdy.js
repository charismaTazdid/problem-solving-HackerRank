
// Problem: https://www.hackerrank.com/challenges/taum-and-bday

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    const gifts = BigInt(b) + BigInt(w);

    const whiteGifts = gifts * BigInt(wc) + (BigInt(b) * BigInt(z));
    const blackGifts = gifts * BigInt(bc) + (BigInt(w) * BigInt(z));

    let min = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);

    (blackGifts < min) && (min = blackGifts);
    (whiteGifts < min) && (min = whiteGifts);

    return min;
}