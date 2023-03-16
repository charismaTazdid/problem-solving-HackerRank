# Problem: https://www.hackerrank.com/challenges/s10-binomial-distribution-2/problem?isFullScreen=true
import math
x, y = map(float, input().split())
p = x/100
q = 1-p
b = []
# for no more than 3 rejects
for i in range(0, 3):
    f = math.comb(10, i)*(p**i)*(q**(10-i))
    b.append(f)
print(round((sum(b)), 3))

# for atleast 2 rejects
c = []
for j in range(2, 10):
    f = math.comb(10, j)*(p**j)*(q**(10-j))
    c.append(f)
print(round((sum(c)), 3))
