# PROBLEM: https://www.hackerrank.com/challenges/s10-the-central-limit-theorem-1/problem?isFullScreen=true


from math import *
def zScore(x):
    return (1.0 + erf(x / sqrt(2.0))) / 2.0
sumN = int(input())
n = int(input())
u = int(input())
o = int(input())

pr = (sumN - n*u) / (sqrt(n)*o)

x = zScore(pr)
print(round(x,4))