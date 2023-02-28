# Problem: https://www.hackerrank.com/challenges/s10-normal-distribution-1/problem?isFullScreen=true

import sys
import math as m

mu, sig = map(float, input().split())
t0 = float(input())
t1, t2 = map(float, input().split())

z0 = (t0 - mu)/(sig*m.sqrt(2))
z1 = (t1 - mu)/(sig*m.sqrt(2))
z2 = (t2 - mu)/(sig*m.sqrt(2))

print(round(0.5 + 0.5*m.erf(z0),3))
print(round(0.5*m.erf(z2) - 0.5*m.erf(z1),3))