#Problem Link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true


def miniMaxSum(arr):
    # Write your code here
    arr = sorted(arr)
    minSum = sum(arr[:4])
    maxSum = sum(arr[-4:])
    print(minSum, maxSum)