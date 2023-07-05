# Problem: https://www.hackerrank.com/challenges/closest-numbers/

def closestNumbers(arr):    
    arr_sort = sorted(arr)
    sd = abs(arr_sort[-1] - arr_sort[0])    
    ans = []
    for i,x in enumerate(arr_sort):
        if i+1 < len(arr_sort):
            if abs(x - arr_sort[i+1]) < sd:
                ans.clear()
                ans.extend([x, arr_sort[i+1]])
                sd = abs(x - arr_sort[i+1]) 
            elif abs(x - arr_sort[i+1]) == sd:
                ans.extend([x, arr_sort[i+1]])
    return ans