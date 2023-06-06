// Problem: https://www.hackerrank.com/challenges/taum-and-bday

function taumBday(b, w, bc, wc, z) {
    [b, w, bc, wc, z] = [b, w, bc, wc, z].map(n => BigInt(n));

    if (bc - wc > z) {
        bc = wc + z;
    } else if (wc - bc > z) {
        wc = bc + z;
    }

    return b * bc + w * wc;
}