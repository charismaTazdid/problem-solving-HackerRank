#Problem Statement: https://www.hackerrank.com/challenges/s10-interquartile-range/problem?isFullScreen=true

import math
import os
import random
import re
import sys
import statistics as st
import math

def interQuartile(values, freqs):
    extended_arr = []
    for i, j in zip(values, freqs):
        extended_arr.extend([i] * j)
    extended_arr.sort()
    left = extended_arr[:math.floor(len(extended_arr)  / 2)]
    right = extended_arr[-math.floor(len(extended_arr)  / 2):]
    q1 = st.median(left)
    q3 = st.median(right)
    print(round(float(q3 - q1), 1))