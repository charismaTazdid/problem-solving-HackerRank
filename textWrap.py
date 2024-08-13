# Problem: https://www.hackerrank.com/challenges/text-wrap
import textwrap


def wrap(string, max_width):
    return "".join([f"{char}\n" if (i + 1) % max_width == 0 else char for i, char in enumerate(string)])
