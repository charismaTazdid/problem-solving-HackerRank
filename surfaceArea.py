# Problem: https://www.hackerrank.com/challenges/3d-surface-area/

def surfaceArea(A):
    h = len(A)
    w = len(A[0])
    s = 2*h*w + A[0][-1] + A[-1][0] + 2*A[-1][-1]
    for i in range(0, h-1):
        s += A[i][0]+A[i][-1]
        for j in range(w):
            s += abs(A[i][j]-A[i+1][j])
    for j in range(w-1):
        s += A[0][j]+A[-1][j]
        for i in range(h):
            s += abs(A[i][j]-A[i][j+1])
    return s
