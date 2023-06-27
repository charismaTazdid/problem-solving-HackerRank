# Problem: https://www.hackerrank.com/challenges/alternating-characters/

def alternatingCharacters(s):
    ls = list(s)
    first = ls[0]
    count = 0
    for i in range(0, len(s)-1):
        if ls[i] == ls[i+1]:
            count += 1
    return count
