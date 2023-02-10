# Problem: https://www.hackerrank.com/challenges/s10-standard-deviation/problem?isFullScreen=true

import statistics
import math
import os
import random
import re
import sys


def stdDev(arr):
    Sum = 0
    me = statistics.mean(arr)
    for i in arr:
        Sum += abs(i-me)**2
    print(math.sqrt(Sum/(len(arr))))
