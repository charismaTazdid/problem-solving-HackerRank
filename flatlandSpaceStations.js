// Problem : https://www.hackerrank.com/challenges/flatland-space-stations

function flatlandSpaceStations(n, c) {
    let checkArr = []
    const m = c.length;
    if (n === m) {
        return 0;
    } else {
        for (let i = 0; i < n; i++) {
            const arr = [];
            c.forEach((ele, index) => {
                arr.push(Math.abs(ele - i))
            })
            const min = Math.min(...arr)
            checkArr.push(min)
        }
        return Math.max(...checkArr)
    }
}
