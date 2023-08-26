# Problem: https://www.hackerrank.com/challenges/bomber-man

def bombs_list(grid):
    bombs = []
    for i, x in enumerate(grid):
        bombs.extend([(i, m.start(0)) for m in re.finditer(chr(79), x)])
    return bombs


def bomberMan(n, grid):
    if n == 1:
        return grid

    full_row = chr(79) * len(grid[0])
    full_grid = [full_row] * len(grid)

    if n % 2 == 0:
        return full_grid

    bombs = bombs_list(grid)
    for _ in range(2):
        gb = full_grid.copy()
        for j in bombs:
            if j[0]-1 >= 0:
                gb[j[0]-1] = gb[j[0]-1][:j[1]] + '.' + gb[j[0]-1][j[1]+1:]
            if j[0]+1 < len(grid):
                gb[j[0]+1] = gb[j[0]+1][:j[1]] + '.' + gb[j[0]+1][j[1]+1:]
            if j[1]+1 < len(grid[0]):
                gb[j[0]] = gb[j[0]][:j[1]+1] + '.' + gb[j[0]][j[1]+2:]
            if j[1]-1 >= 0:
                gb[j[0]] = gb[j[0]][:j[1]-1] + '.' + gb[j[0]][j[1]:]
            gb[j[0]] = gb[j[0]][:j[1]] + '.' + gb[j[0]][j[1]+1:]
        if n == 3 or (n-3) % 4 == 0:
            return gb
        bombs = bombs_list(gb)
    return gb
