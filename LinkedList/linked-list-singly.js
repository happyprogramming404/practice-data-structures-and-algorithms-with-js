class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/**
 * Singly linked list
 */
class LinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const node = new Node(value)
    node.next = this.first
    this.first = node
  }

  /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Runtime: O(n)
   * @param {any} value
   */
  addLast(value) {
    const node = new Node(value)

    if (this.first) {
      let current = this.first
      while (current && current.next) {
        current = current.next
      }
      current.next = node
    } else {
      this.first = node
    }

    return node
  }

  /**
   * Removes element from the start of the list (head/root). similar Array.shift
   * Runtime: O(1)
   */
  removeFirst() {
    const head = this.first

    if (head) {
      this.first = head.next
      return true
    }

    return false
  }

  /**
   * Removes element to the end of the list
   * similar to Array.pop
   * Runtime: O(n)
   */
  removeLast() {
    let current = this.first
    let target = null

    if (current && current.next) {
      while (current && current.next && current.next.next) {
        current = current.next
      }

      target = current.next
      current.next = null
    } else {
      this.first = null
      this.last = null
    }

    return !!target
  }

  /**
   * Find first occurence of the element matching the value
   * return index or undefined
   * Runtime: O(n)
   * @param {any} value
   */
  index(value) {
    for (let current = this.first, index = 0; current; index++, current = current.next) {
      if (current.value === value) {
        return index
      }
    }

    return -1
  }

  /**
   * Remove the nth element from the list. Starting with 0
   * Returns value if found or undefined if it was not found
   * Runtime: O(n)
   * @param {any} position
   */
  removeAtPosition(position) {
    if (position === 0) {
      return this.removeFirst()
    }

    for (let current = this.first, index = 1;
      current;
      current = current.next, index++) {
      if (index + 1 === position) {
        current.next =  current.next.next
        return true
      }
    }

    return false
  }
}