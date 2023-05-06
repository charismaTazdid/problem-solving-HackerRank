# Problem : https://www.hackerrank.com/challenges/non-divisible-subset/problem?isFullScreen=true

def nonDivisibleSubset(k, s):
    count = [0] * k

    for i in s:
        remainder = i % k
        count[remainder] += 1

    ans = min(count[0], 1)

    if k % 2 == 0:
        ans += min(count[k//2], 1)

    for i in range(1, k//2 + 1):
        if i != k - i:           # Avoid over-counting when k is even
            ans += max(count[i], count[k-i])
    return ans
