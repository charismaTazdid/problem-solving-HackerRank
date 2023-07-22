# Problem: https://www.hackerrank.com/challenges/knightl-on-chessboard

def valid(a, b, mx):
    if 0 <= a <= mx and 0 <= b <= mx:
        return True
    return False


def bfs(a, b, mx, q):
    vis = [[0 for j in range(mx+1)] for i in range(mx+1)]
    while len(q) != 0:
        ni, nj, c = q.pop()
        if valid(ni, nj, mx):
            if vis[ni][nj] == 0:
                vis[ni][nj] = 1
                if ni == mx and nj == mx:
                    return c
                q.insert(0, (ni-a, nj-b, c+1))
                q.insert(0, (ni-a, nj+b, c+1))
                q.insert(0, (ni+a, nj-b, c+1))
                q.insert(0, (ni+a, nj+b, c+1))
                q.insert(0, (ni-b, nj-a, c+1))
                q.insert(0, (ni-b, nj+a, c+1))
                q.insert(0, (ni+b, nj-a, c+1))
                q.insert(0, (ni+b, nj+a, c+1))
            else:
                continue
        else:
            continue
    if len(q) == 0 and vis[mx][mx] == 0:
        return -1


def knightlOnAChessboard(n):
    mat = [[0 for j in range(n-1)] for i in range(n-1)]
    for i in range(n-1):
        for j in range(n-1):
            q = [(0, 0, 0)]
            if mat[j][i] != 0:
                mat[i][j] = mat[j][i]
            else:
                mat[i][j] = bfs(i+1, j+1, n-1, q)
    return mat
