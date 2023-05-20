# Problem: https://www.hackerrank.com/challenges/service-lane/problem?isFullScreen=true

def serviceLane(n, cases):
    # Write your code here
    ans = []
    for i in cases:
        ans.append(min(width[i[0]:i[1]+1]))
    return ans