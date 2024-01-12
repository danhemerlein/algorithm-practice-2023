/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {}
  for (let num of nums) {
    if (num in dict) {
      return true
    } else {
      dict[num] = 1
    }
  }
  return false
}

const test1 = [1, 2, 3, 1] // true
const test2 = [1, 2, 3, 4] // false
const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] // true

console.log(containsDuplicate(test1))
console.log(containsDuplicate(test2))
console.log(containsDuplicate(test3))
