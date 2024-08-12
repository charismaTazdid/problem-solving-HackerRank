// Problem : https://leetcode.com/problems/shortest-path-to-get-all-keys/

function shortestPathAllKeys(grid) {
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const height = grid.length, width = grid[0].length;
    const g = new Array(height);
    let startX = -1, startY = -1;
    let expect = 0;
    for (let i = 0; i < height; i++) {
        g[i] = new Array(width);
        const arr = grid[i].split('');
        for (let j = 0; j < width; j++) {
            g[i][j] = arr[j];
            if (arr[j] === '@') {
                startX = i;
                startY = j;
            } else if (arr[j] >= 'a' && arr[j] <= 'f') {
                expect |= 1 << (arr[j].charCodeAt(0) - 'a'.charCodeAt(0));
            }
        }
    }
    const q = []; // Array to store [x, y, key]
    const startState = (startX << 16) | (startY << 8) | 0;
    q.push(startState);
    let step = -1;
    const visited = new Set();
    while (q.length > 0) {
        const size = q.length;
        step++;
        for (let i = 0; i < size; i++) {
            const cur = q.shift();
            if ((cur & 0b111111) === expect) return step;
            if (visited.has(cur)) continue;
            visited.add(cur);
            let tx = 0, ty = 0;
            const curX = (cur >> 16) & 0xFF, curY = (cur >> 8) & 0xFF;
            const curKey = cur & 0xFF;
            for (let d = 0; d < 4; d++) {
                tx = curX + dir[d][0];
                ty = curY + dir[d][1];
                if (tx >= 0 && tx < height && ty >= 0 && ty < width && g[tx][ty] !== '#') {
                    if (isUpper(g[tx][ty]) && (cur & (1 << (g[tx][ty].charCodeAt(0) - 'A'.charCodeAt(0)))) === 0) continue;
                    const nextState = (tx << 16) | (ty << 8) | (!isLower(g[tx][ty]) ? curKey : (curKey | (1 << (g[tx][ty].charCodeAt(0) - 'a'.charCodeAt(0)))));;
                    q.push(nextState);
                }
            }
        }
    }
    return -1;
}
function isUpper(c) {
    return c >= 'A' && c <= 'F';
}
function isLower(c) {
    return c >= 'a' && c <= 'f';
}

// Complexity: O(N * K * 2^K)