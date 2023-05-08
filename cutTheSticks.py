# Problem : https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true

def cutTheSticks(arr):
    # Write your code here
    res = []
    while len(arr) != 0:
        res.append(len(arr))
        m = min(arr)
        for i in range(len(arr)):
            arr[i] = arr[i]-m
        for i in range(arr.count(0)):
            arr.remove(0)

    return res
