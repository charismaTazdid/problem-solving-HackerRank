# Problem: https://www.hackerrank.com/challenges/palindrome-index/problem

def palindromeIndex(s):
    # Write your code here
    if s==s[::-1]:
        return -1
    n=len(s)//2
    for i in range(n):
        if s[i]!=s[-(i+1)]:
            
            temps=list(s)
            del temps[i]
            s1="".join(temps)
            
            temp2=list(s)
            del temp2[-(i+1)]
            s2="".join(temp2)
            
                     
            if s1==s1[::-1]:
                return i
            
            if s2==s2[::-1]:
                return len(s)-i-1
