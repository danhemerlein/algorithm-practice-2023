/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {}

const testS1 = 'anagram'
const testT1 = 'mnagraa'

const testS2 = 'rat'
const testT2 = 'car'

const testS3 = 'r'
const testT3 = 'car'

const testS4 = 'racecar'
const testT4 = 'rraacce'

console.log(isAnagram(testS1, testT1)) // true
console.log(isAnagram(testS2, testT2)) // false
console.log(isAnagram(testS3, testT3)) // false
console.log(isAnagram(testS4, testT4)) // true
