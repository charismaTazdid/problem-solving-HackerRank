# Problem: https://www.hackerrank.com/challenges/runningtime/

def runningTime(arr):
    n = len(arr)
    count = 0
    for i in range(1, n):
        j = i-1
        key = arr[i]
        while j >= 0 and arr[j] > key:
            count += 1
            arr[j+1] = arr[j]
            j -= 1

        arr[j+1] = key

    return count
