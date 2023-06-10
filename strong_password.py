# Problem: https://www.hackerrank.com/challenges/strong-password

def minimumNumber(n, password):
    numbers = "0123456789"
    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    special_characters = "!@#$%^&*()-+"

    c1, c2, c3, c4 = 1, 1, 1, 1

    for i in password:
        if i in numbers:
            c1 = 0
        if i in lower_case:
            c2 = 0
        if i in upper_case:
            c3 = 0
        if i in special_characters:
            c4 = 0

    if (n + c1 + c2 + c3 + c4) < 6:
        return 6 - n
    return c1 + c2 + c3 + c4
