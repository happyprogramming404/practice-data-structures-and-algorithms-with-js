## notes
- Singly: every item has a pointer to the next node
- Doubly: every node has a reference to the next and previous node
- Circular: the last element points to the first one

#### Linked List vs. Array
Arrays allow you to access data anywhere in the collection using an index. However, Linked List visits nodes in sequential order. In the worst-case scenario, it takes O(n) to get an element from a Linked List. You might be wondering: Isn’t an array always more efficient with O(1) access time? It depends.

We also have to understand the space complexity to see the trade-offs between arrays and linked lists. An array pre-allocates contiguous blocks of memory. It has to create a larger array (usually 2x) and copy all the elements when it is getting full. It takes O(n) to copy all the items over. On the other hand, LinkedList’s nodes only reserve precisely the amount of memory they need. They don’t have to be next to each other, nor are large chunks of memory booked beforehand like arrays. Linked List is more on a "grow as you go" basis.

Another difference is that adding/deleting at the beginning on an array takes O(n); however, the linked list is a constant operation O(1).

A drawback of a linked list is that if you want to insert/delete an element at the end of the list, you would have to navigate the whole collection to find the last one: O(n). However, this can be solved by keeping track of the last element in the list.

---

Linked lists provide us with fast append(Adding element at the end) and prepend(Adding element at the start) operations. **Although the insertion operation in linked lists is of complexity O(n), it is much faster than insertion operation of arrays.** The other problem that we face while using arrays is size complexity, when we use dynamic arrays, while adding an element, we have to copy the complete array to a different address space and then add the element whereas, in linked lists, we don’t face such problems.

## References
- [Understanding Data Structures in JavaScript (Linked Lists)](https://blog.soshace.com/understanding-data-structures-in-javascript-linked-lists/)
- [dsa.js linked-list](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/book/content/part02/linked-list.asc)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [visualgo.net](https://visualgo.net/en/list?slide=3)
- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [LinkedList Data Structure](https://www.programiz.com/dsa/linked-list)

## LeetCode
- [Merge Two Sorted Lists](https://leetcode.com/submissions/detail/397339479/)
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
