# Problem: https://www.hackerrank.com/challenges/s10-pearson-correlation-coefficient/problem?isFullScreen=true

import statistics as m

n = int(input())
X = list(map(float,input().split()))
Y = list(map(float,input().split()))

ux = m.mean(X)
sx = m.pstdev(X)

uy = m.mean(Y)
sy = m.pstdev(Y)

num = 0
for i in range(len(X)):
    num = num+(X[i]-ux)*(Y[i]-uy)
print(round(num/(n*sy*sx),3))