# Problem: https://www.hackerrank.com/challenges/tutorial-intro/

def introTutorial(V, arr):
    start = 0
    end = n-1
    while start <= end:
        mid = (start+end)//2

        if V > arr[mid]:
            start = mid+1
        elif V < arr[mid]:
            end = mid-1
        else:
            return mid
    return -1
