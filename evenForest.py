# Problem: https://www.hackerrank.com/challenges/even-tree

def evenForest(n, t_edges, t_from, t_to):
    G = [[] for _ in range(n)]
    for u, v in zip(t_from, t_to):
        G[v-1].append(u-1)

    def dfs(node):
        nonlocal res
        v = 1
        for child in G[node]:
            v += dfs(child)
        res += v % 2 == 0 and node != 0
        return v
    res = 0
    dfs(0)
    return res
