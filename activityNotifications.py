# Problem: https://www.hackerrank.com/challenges/fraudulent-activity-notifications

import bisect


def activityNotifications(expenditure, d):
    history = sorted(expenditure[:d])
    a = math.ceil((d-1)/2)
    b = math.floor((d-1)/2)
    count = 0
    for i in range(len(expenditure)-d):
        count += (history[a] + history[b] <= expenditure[i+d])
        # Update history while keeping it sorted.
        history.pop(bisect.bisect_left(history, expenditure[i]))
        bisect.insort(history, expenditure[i+d])
    return count
