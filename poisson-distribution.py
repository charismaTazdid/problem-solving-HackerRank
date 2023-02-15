# Problem: https://www.hackerrank.com/challenges/s10-poisson-distribution-1/problem?isFullScreen=true


import math

l = float(input())
k = int(input())

pd = (pow(l, k)*pow(2.71828, -l))/math.factorial(k)

print("%.3f" % pd)
