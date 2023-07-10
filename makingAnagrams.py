# Problem: https://www.hackerrank.com/challenges/making-anagrams/

def makingAnagrams(s1, s2):
    # Write your code here
    a = 0
    s3 = set(s1+s2)
    for i in s3:
        a += abs(s2.count(i)-s1.count(i))
    return a
