# Problem: https://www.hackerrank.com/challenges/two-characters/

def alternate(s):    
    a = list(set(s))    
    len_w = 0
    for i,x in enumerate(a):
        for y in a[i+1:]:
            result = re.sub(rf"[^{x}{y}]", '', s)
            if f'{x}{x}' not in result and f'{y}{y}' not in result and len(result) > len_w:
                len_w = len(result)                
    return len_w