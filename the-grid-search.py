# Problem:


def gridSearch(G, P):
    for i in range(len(G) - (len(P)-1)):
        begin = None
        counter = 0
        for element in P:
            x = re.finditer("(?=" + element + ")", G[i + counter])
            x = [match.start() for match in x]
            if x:
                if begin == None:
                    begin = set(x)
                else:
                    begin = begin & set(x)
                    if not begin:
                        break
                counter += 1
            else:
                break
        if counter == len(P):
            return "YES"

    return "NO"
