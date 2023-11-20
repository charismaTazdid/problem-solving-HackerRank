# Problem: https://www.hackerrank.com/challenges/ginorts

def keyfunc(char):
    if char >= "a" and char <= "z":
        return ord(char)-97
    elif char >= "A" and char <= "Z":
        return ord(char)-65+26
    elif int(char) % 2 != 0:
        return ord(char)+50
    else:
        return ord(char)+100


s = input()
s_sorted = sorted(s, key=keyfunc)
print("".join(s_sorted))
