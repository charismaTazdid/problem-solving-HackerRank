from collections import OrderedDict

items = OrderedDict()
for _ in range(int(input())):
    s = list(input().split())
    name = str(' '.join(s[:len(s)-1]))
    count = int(s[len(s)-1])
    if name in items:
        items[name] += count
    else:
        items[name] = count

for name, count in items.items():
    print(name, count)

#problem Link: https://www.hackerrank.com/challenges/py-collections-ordereddict/