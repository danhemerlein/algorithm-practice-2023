/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // O(n) time - only having to go throught every input character once
  // O(n) space - stack creation
  const stack = []

  const openToClose = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    const el = s[i]
    // the element is an opening - push the corresponding closing to the stack
    if (el in openToClose) {
      stack.push(openToClose[el])
      // if the element is a closing - pop the bracket from the stack. Since the order should mathch. Obviously the current looped element must match with the popped element. If it doesn't match, it means a wrong bracket was closed and was not in order and we return false
    } else if (stack.length === 0 || stack.pop() !== el) {
      return false
    }
  }
  // if there remains elements in the stack - some were not closed properly
  return stack.length === 0 ? true : false
}

const testOne = '()'
const testTwo = '()[]{}'
const testThree = '(]'

console.log(isValid(testOne)) // true
console.log(isValid(testTwo)) // true
console.log(isValid(testThree)) // false
