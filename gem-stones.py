# Problem: https://www.hackerrank.com/challenges/gem-stones/

def gemstones(arr):
    gem = set(arr[0])
    for i in range(1, len(arr)):
        gem &= set(arr[i])
    return len(gem)
