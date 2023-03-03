# Problem: https://www.hackerrank.com/challenges/s10-spearman-rank-correlation-coefficient/problem?isFullScreen=true

n = int(input())
x = list(map(float, input().split()))
y = list(map(float, input().split()))
sort_x = sorted(x)
sort_y = sorted(y)
di_square = 0
for i, j in zip(x, y):
    di_square += (sort_x.index(i) - sort_y.index(j))**2
r_xy = 1-((6*di_square)/(n*((n**2)-1)))
print(round(r_xy, 3))
