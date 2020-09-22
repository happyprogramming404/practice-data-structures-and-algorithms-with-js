## Notes
- Singly: every item has a pointer to the next node
- Doubly: every node has a reference to the next and previous node
- Circular: the last element points to the first one

**Doubly Linked List**: If there is only one sentinel node, then the list is circularly linked via the sentinel node. It can be conceptualized as two singly linked lists formed from the same data items, but in opposite sequential orders.



#### Linked List vs. Array
Arrays allow you to access data anywhere in the collection using an index. However, Linked List visits nodes in sequential order. In the worst-case scenario, it takes O(n) to get an element from a Linked List. You might be wondering: Isn’t an array always more efficient with O(1) access time? It depends.

We also have to understand the space complexity to see the trade-offs between arrays and linked lists. An array pre-allocates contiguous blocks of memory. It has to create a larger array (usually 2x) and copy all the elements when it is getting full. It takes O(n) to copy all the items over. On the other hand, LinkedList’s nodes only reserve precisely the amount of memory they need. They don’t have to be next to each other, nor are large chunks of memory booked beforehand like arrays. Linked List is more on a "grow as you go" basis.

Another difference is that adding/deleting at the beginning on an array takes O(n); however, the linked list is a constant operation O(1).

A drawback of a linked list is that if you want to insert/delete an element at the end of the list, you would have to navigate the whole collection to find the last one: O(n). However, this can be solved by keeping track of the last element in the list.

Linked lists provide us with fast append(Adding element at the end) and prepend(Adding element at the start) operations. **Although the insertion operation in linked lists is of complexity O(n), it is much faster than insertion operation of arrays.** The other problem that we face while using arrays is size complexity, when we use dynamic arrays, while adding an element, we have to copy the complete array to a different address space and then add the element whereas, in linked lists, we don’t face such problems.

## References
- [Understanding Data Structures in JavaScript (Linked Lists)](https://blog.soshace.com/understanding-data-structures-in-javascript-linked-lists/)
- [dsa.js linked-list](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/book/content/part02/linked-list.asc)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [visualgo.net](https://visualgo.net/en/list?slide=3)
- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [LinkedList Data Structure](https://www.programiz.com/dsa/linked-list)

## LeetCode
<details>
<summary>Merge Two Sorted Lists</summary>

#### [#21 Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
```
##### solution 1
```javascript
var mergeTwoLists = function(l1, l2) {
    const mergedLinkedListHead = { val : -1000, next : null }
    let runner = mergedLinkedListHead

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2
            l2 = l2.next
        } else {
            runner.next = l1
            l1 = l1.next
        }
        runner = runner.next
    }
    
    runner.next = l1 || l2

    return mergedLinkedListHead.next
}
```
##### solution 2
```javascript
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    
    if (l1.val <= l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
}
```
</details>

<details>
<summary>Remove Duplicates from Sorted List</summary>

#### [#83 Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
```
##### solution 1
```javascript
const deleteDuplicates = head => {
  const vals = new Set()
  const currPrev = new ListNode(NaN)
  currPrev.next = head

  while(currPrev.next) {
    const val = currPrev.next.val
    if (vals.has(val)) {
      currPrev.next = currPrev.next.next
    } else {
      vals.add(val)
      currPrev = currPrev.next
    }
  }

  return head
}
```
##### solution 2
```javascript
const deleteDuplicates = head => {
  if (!head || !head.next) return head

  let curr = head.next
  let prev = head

  while(curr) {
    if (prev.val === curr.val) {
      prev.next = curr.next
      curr = prev.next
    } else {
      prev = curr
      curr = curr.next 
    }
  }

  return head
}
```
##### solution 3
```javascript
const deleteDuplicates = head => {
  let curr = head

  while(curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
}
```
</details>

<details>
<summary>Linked List Cycle</summary>

#### [#141 Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
```
##### solution 1(Hash Table)
```javascript
const hasCycle = head => {
  const nodes = new Set()
  let currentNode = head

  while (currentNode) {
    if (nodes.has(currentNode)) return true

    nodes.add(currentNode)
    currentNode = currentNode.next
  }

  return false
}
```
##### solution 2(Two Pointers)
```javascript
const hasCycle = head => {
  let slow = head
  let fast = head

  while (fast) {
    if (!fast.next) return false

    fast = fast.next.next
    slow = slow.next

    if (fast === slow) return true
  }

  return false
}
```
</details>

<details>
<summary>Linked List Cycle II</summary>

#### [#142 Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
```

##### solution 1
```javascript
const detectCycle = head => {
  const nodes = new Set()

  while(head) {
    if (nodes.has(head)) return head

    nodes.add(head)
    head = head.next
  }

  return null
}
```
##### solution 2
```javascript
const detectCycle = head => {
  let fast = head, slow = head

  while(true) {
    if (!fast || !fast.next) return null

    fast = fast.next.next
    slow = slow.next

    if (fast === slow) break
  }

  fast = head

  while(fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return fast
}
```
</details>

<details>
<summary>Remove Linked List Elements</summary>

#### [#203 Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
```
##### solution 1
```javascript
const removeElements = (head, val) => {
  const sentinel = new ListNode(0)
  sentinel.next = head

  let prev = sentinel, curr = head

  while(curr) {
    if (curr.val === val) prev.next = curr.next
    else prev = curr
    curr = curr.next
  }

  return sentinel.next
}
```
##### solution 2
```javascript
const removeElements = (head, val) => {
  if (!head) return null

  head.next = removeElements(head.next, val)

  return head.val === val ? head.next : hedad
}
```
##### solution 3
```javascript
const removeElements = (head, val) => {
  if (!head) return null

  let current = head

  while(current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head.val === val ? head.next : head
}
```
##### solution 4
```javascript
const removeElements = (head, val) => {
  while (head && head.val === val) {
    head = head.next
  }

  let current = head

  while(current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}
```
</details>

<details>
<summary>Intersection of Two Linked Lists</summary>

#### [#160 Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
```
##### solution 1
```javascript
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null

  let a = headA, b = headB

  while(a !== b) {
    a = a === null ? headB : a.next
    b = b === null ? headA : b.next
  }

  return a
}
```
##### solution 2
```javascript
const getIntersectionNode = (headA, headB) => {
  const nodesA = new Set()
  let currentA = headA
  let currentB = headB

  while(currentA) {
    if (!nodesA.has(currentA)) nodesA.add(currentA)
    currentA = currentA.next
  }

  while(currentB) {
    if (nodesA.has(currentB)) return currentB
    currentB = currentB.next
  }

  return null
}
```
##### solution 3
```javascript
const getIntersectionNode = (headA, headB) => {
  const stackA = [], stackB = []

  while(headA) {
    stackA.push(headA)
    headA = headA.next
  }

  while(headB) {
    stackB.push(headB)
    headB = headB.next
  }

  let prev = null

  while(stackA.length && stackB.length) {
    let nodeA = stackA.pop(), nodeB = stackB.pop()

    if (nodeA !== nodeB) return prev
    else prev = nodexA
  }

  return prev
}
```
##### solution 4
```javascript
const getIntersectionNode = (headA, headB) => {
  let a = headA, b = headB

  while(a) {
    while(b) {
      if (a === b) return b
      b = b.next
    }

    b = headB
    a = a.next
  }

  return null
}
```
</details>

<details>
<summary>Reverse Linked List</summary>

#### [#206 Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
```javascript
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
```
##### solution 1
```javascript
const reverseList = head => {
  let prev = null, curr = head

  while(curr) {
    const next = curr.next

    curr.next = prev
    prev = curr

    curr = next
  }

  return prev
}
```
##### solution 2
```javascript
const reverseList = head => {
  if (!head || !head.next) return head

  const newHead = reverseList(head.next)

  head.next.next = head
  head.next = null

  return newHead
}
```
</details>

<details>
<summary>Palindrome Linked List</summary>

#### [#206 Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
```
##### solution 1
```javascript
const isPalindrome = head => {
  const nodeArr = []

  while(head) {
    nodeArr.push(head)
    head = head.next
  }

  let first = 0, last = nodeArr.length - 1

  while(first < last) {
    if (nodeArr[first].val !== nodeArr[last].val) return false

    first++
    last--
  }

  return true
}
```
##### solution 2
```javascript
const isPalindrome = head => {
  let frontPointer = head
  let recursivelyCheck = node => {
    if (node) {
      if (!recursivelyCheck(node.next)) return false
      if (frontPointer.val !== node.val) return false
      frontPointer = frontPointer.next
    }

    return true
  }

  return recursivelyCheck(head)
}
```
</details>

<details>
<summary>Swap Nodes in Pairs</summary>

#### [#24 Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

```javascript
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
```
##### solution 1
```javascript
const swapPairs = head => {
  if (!head || !head.next) return head

  const newHead = head.next

  newHead.next = swapPairs(head.next)
  head.next = newHead

  return newHead  
}
```
##### solution 2
```javascript
const swapPairs = head => {
  const dummyHead  = new ListNode()
  dummyHead.next = head
  let temp = dummyHead

  while(temp && temp?.next?.next) {
    const node1 = temp.next, node2 = temp.next.next
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }

  return dummyHead.next
}
```
</details>

<details>
<summary>Middle of the Linked List</summary>

#### [#24 Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
```javascript
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
```
##### solution 1
```javascript
const middleNode = head => {
  let slow = head, fast = head

  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
```
##### solution 2
```javascript
const middleNode = head => {
  let total = 0, middle = 0, current = head

  while(current) {
    total++
    current = current.next
  }

  current = head

  while(middle < (total / 2 | 0)) {
    middle++
    current = current.next
  }

  return current
}
```
##### solution 3
```javascript
const middleNode = head => {
  const nodes = []
  let current = head

  while(current) {
    nodes.push(current)
    current = current.next
  }

  return nodes[nodes.length / 2 | 0]
}
```
</details>