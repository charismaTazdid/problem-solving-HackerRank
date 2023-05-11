# Problem : https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true

# One liner solution

def equalizeArray(arr):
    return len(arr) - max(arr.count(i) for i in arr)
