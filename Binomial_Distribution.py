

import math
x, y = map(float, input().split())
p = x/(y+x)
q = 1-p
b = []
for i in range(3, 6+1):
    f = math.comb(6, i)*(p**i)*(q**(6-i))
    b.append(f)
print(round((sum(b)), 3))
