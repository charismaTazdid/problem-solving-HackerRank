# Problem: https://www.hackerrank.com/challenges/lisa-workbook

def workbook(n, k, arr):
    special = 0
    page = 0
    for i in range(n):
        numbers = arr[i]
        count = 0
        while numbers > 0:
            page += 1
            if page > count and page <= count+k and page <= count+numbers:
                special += 1
            count += k
            numbers -= k
    return special
