
# Problem Link: https://www.hackerrank.com/challenges/staircase/problem

def staircase(n):
    line = [" " for _ in range(n)]
    for i in range(n-1,-1,-1):
        line[i] = "#"
        print("".join(line))
