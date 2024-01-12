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
var isAnagram = function (s, t) {
  // hash map solution
  if (s.length != t.length) {
    return false
  }

  const sMap = {},
    tMap = {}

  for (let i = 0; i < s.split('').length; i++) {
    s[i] in sMap ? (sMap[s[i]] += 1) : (sMap[s[i]] = 1)
    t[i] in tMap ? (tMap[t[i]] += 1) : (tMap[t[i]] = 1)
  }

  for (key in sMap) {
    if (sMap[key] != tMap[key]) {
      return false
    }
  }

  return true

  // sorted string solution
  // return s.split('').sort().join('') === t.split('').sort().join('')
}

const testS1 = 'anagram'
const testT1 = 'nagaram'

const testS2 = 'rat'
const testT2 = 'car'

console.log(isAnagram(testS1, testT1))
console.log(isAnagram(testS2, testT2))
