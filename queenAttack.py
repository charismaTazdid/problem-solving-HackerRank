# Problem: https://www.hackerrank.com/challenges/queens-attack-2/
def queensAttack(n, k, r_q, c_q, obstacles):

    p = {
        (0, 1): n-c_q,
        (1, 1): min(n-r_q, n-c_q),
        (1, 0): n-r_q,
        (1, -1): min(n-r_q, c_q-1),
        (0, -1): c_q-1,
        (-1, -1): min(r_q-1, c_q-1),
        (-1, 0): r_q-1,
        (-1, 1): min(r_q-1, n-c_q)
    }

    for r_o, c_o in obstacles:
        x, y = (r_o - r_q), (c_o - c_q)
        if (x == 0 or y == 0 or abs(x) == abs(y)):
            d = ((x > 0) - (x < 0), (y > 0) - (y < 0))
            l = max(abs(x), abs(y))-1
            p[d] = min(l, p[d])

    return sum(p.values())
