# Problem: https://www.hackerrank.com/challenges/insertionsort1

def insertionSort1(n, arr):
    # Write your code here
    a = arr.pop()
    arr = list(map(str, arr))
    for i in range(len(arr)-1, 0-1, -1):
        if int(arr[i]) > a:
            arr.insert(i, arr[i])
            print(' '.join(arr))
            arr.pop(i)
            if i == 0 and int(arr[i]) > a:
                arr.insert(i, str(a))
                print(' '.join(arr))
        else:
            arr.insert(i+1, str(a))
            print(' '.join(arr))
            break
