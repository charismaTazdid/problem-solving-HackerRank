
/** Problem Number 32 on LeedCode
 * @param {string} s
 * @return {number}
 Given a string containing just the characters '(' and ')', 
 find the length of the longest valid (well-formed) parentheses substring.
 */
const longestValidParentheses = (string) => {
    let stack = [-1], ans = 0
    for (let i = 0; i < string.length; i++)
        if (string[i] === '(') stack.push(i)
        else if (stack.length === 1) stack[0] = i
        else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
    return ans
};