/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// the most number of times an integer can occur is the length of the array
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map()
  const bucket = []
  const result = []

  // hash map for number of ocrrences per item in nums
  // sets the value to either be the existing number + 1 or 0
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  // add the number to the set if it exsits or init a new set at the index of the number of orruences
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num)
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i])
    if (result.length === k) break
  }

  return result
}

const testNums1 = [1, 1, 1, 2, 2, 3]
const testK1 = 2 // [1,2]

const testNums2 = [1]
const testK2 = 1 // [1]

const testNums3 = [4, 1, -1, 2, -1, 2, 3]
const testK3 = 2 // [-1,2]

// console.log(topKFrequent(testNums1, testK1))
// console.log(topKFrequent(testNums2, testK2))
console.log(topKFrequent(testNums3, testK3))
