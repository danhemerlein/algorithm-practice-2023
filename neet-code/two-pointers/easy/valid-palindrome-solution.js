/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // not constant memory
  /*
    const wash = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reverse = wash.split('').reverse().join('')
    return wash === reverse
   */

  // constant memory
  const wash = s
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .split('')

  for (let i = 0; i < wash.length; i++) {
    const left = wash[i]
    const right = wash[wash.length - i - 1]

    if (left !== right) {
      return false
    }
  }

  return true
}

const testCaseOne = 'A man, a plan, a canal: Panama' // true
const testCaseTwo = 'race a car' // false
const testCaseThree = '' // true
const testCaseFour = 'cat' // false
const testCaseFive = 'ttttTTttTtTTtttt' // true
const testCaseSix = 'xyz' // false

console.log(isPalindrome(testCaseOne))
console.log(isPalindrome(testCaseTwo))
console.log(isPalindrome(testCaseThree))
console.log(isPalindrome(testCaseFour))
console.log(isPalindrome(testCaseFive))
console.log(isPalindrome(testCaseSix))
