# Problem: https://www.hackerrank.com/challenges/gridland-metro

def gridlandMetro(n, m, k, track):
    resd = {}
    for arr in track:
        if arr[0] not in resd:
            resd[arr[0]] = arr[1:]
        else:
            resd[arr[0]][0] = min(resd[arr[0]][0], arr[1])
            resd[arr[0]][1] = max(resd[arr[0]][1], arr[2])
    sum1 = 0
    for arr in resd.values():
        sum1 += arr[1]-arr[0]+1
    return n*m-sum1
