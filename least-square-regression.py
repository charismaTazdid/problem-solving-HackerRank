# Probelm: https://www.hackerrank.com/challenges/s10-least-square-regression-line/problem?isFullScreen=true

n = 5
x = []
y = []
for i in range(0, n):
    a, b = map(int, input().split())
    x.append(a)
    y.append(b)
sumX = sum(x)
sumY = sum(y)
x_ = sumX/n
y_ = sumY/n
xy = 0
x2 = 0
for i in range(0, n):
    xy += x[i] * y[i]
    x2 += x[i] ** 2

b = (n * xy - sumX * sumY)/(n * x2 - sumX**2)
a = y_ - b*x_

X = 80
Y = a + b*X
print(round(Y, 3))
