function matrixRotation(matrix, r) {
    // Write your code here
    let
        res = [...matrix],
        m = matrix.length,
        n = matrix[0].length,
        p = getPerimeters(m, n);

    p.forEach((pe, buffer) => {
        let
            r1 = r % pe,
            e = [], xy = [],
            h = m - (buffer * 2) - 1,
            w = n - (buffer * 2) - 1,
            a = 0, b = 1, c = h, d = w;

        for (let i = 0; i < pe; i++) {
            if (i <= h) {
                // left side
                e.push(matrix[a + buffer][buffer]);
                xy.push([a + buffer, buffer]);
                a++;
            } else if (i < h + w) {
                // bottom row
                e.push(matrix[h + buffer][b + buffer]);
                xy.push([h + buffer, b + buffer]);
                b++;
            } else if (i < (h * 2) + w) {
                // right side
                e.push(matrix[c + buffer][w + buffer]);
                xy.push([c + buffer, w + buffer]);
                c--;
            } else if (i < (h + w) * 2) {
                // top row
                e.push(matrix[buffer][d + buffer]);
                xy.push([buffer, d + buffer]);
                d--;
            }
        }

        if (r1 > 0) {
            let
                arr = e.slice(pe - r1, e.length).concat(...e.slice(0, pe - r1));
            for (let i = 0; i < pe; i++) {
                let
                    x = xy[i][0],
                    y = xy[i][1];

                res[x][y] = arr[i];
            }
        }
    })

    res.forEach(row => console.log(row.join(" ")));

}

function getPerimeters(m, n) {
    let p = [];
    while (Math.min(m, n) > 0) {
        p.push((2 * m) + (2 * n) - 4);
        m -= 2;
        n -= 2;
    }
    return p;
}



//problem link: https://www.hackerrank.com/challenges/matrix-rotation-algo/problem


