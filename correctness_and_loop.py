# Problem: https://www.hackerrank.com/challenges/correctness-invariant/

def insertion_sort(l):
    for i in range(len(l)-1):
        j = i
        while (j >= 0) and (l[j] > l[j+1]):
            l[j+1], l[j] = l[j], l[j+1]
            j -= 1


m = int(input().strip())
ar = [int(i) for i in input().strip().split()]
insertion_sort(ar)
print(" ".join(map(str, ar)))
