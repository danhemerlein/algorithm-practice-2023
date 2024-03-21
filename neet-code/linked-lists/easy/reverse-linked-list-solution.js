/*

206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.


Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000


Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iterative solution
var reverseList = function (head) {
  // time is O(n) memory is O(1)
  // init two pointers
  let prev = null
  let curr = head

  while (curr) {
    let nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  }
  return prev
}

const testCaseOne = [1, 2, 3, 4, 5]
const testCaseTwo = [1, 2]
const testCaseThree = []

// console.log(reverseList(testCaseOne))
// console.log(reverseList(testCaseTwo))
// console.log(reverseList(testCaseThree))

// iterative solution
var reverseListRecursive = function (head) {
  if (!head) {
    return null
  }

  let newHead = head
  if (head.next) {
    newHead = reverseListRecursive(head.next)
    head.next.next = head
  }
  head.next = null
  return newHead
}

const testCaseOneR = [1, 2, 3, 4, 5]
const testCaseTwoR = [1, 2]
const testCaseThreeR = []

console.log(reverseListRecursive(testCaseOneR))
console.log(reverseListRecursive(testCaseTwoR))
console.log(reverseListRecursive(testCaseThreeR))
