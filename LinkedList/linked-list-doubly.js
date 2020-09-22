class Node {
  counstructure(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

/**
 * Doubly linked list that keeps track of
 * the last and first element
 */
class LinkedList {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /**
   * Alias for size
   */
  get length() {
    return this.size
  }

  /**
   * Adds element to the begining of the list. Similar to Array.unshift
   * Runtime: O(1)
   * @param {any} value
   */
  addFirst(value) {
    const newNode = new Node(value)

    newNode.next = this.first

    if (this.first) {
      this.first.previous = newNode
    } else {
      this.last = newNode
    }

    this.first = newNode // update head
    this.size++

    return newNode
  }

   /**
   * Adds element to the end of the list (tail). Similar to Array.push
   * Using the element last reference instead of navigating through the list,
   * we can reduced from linear to a constant runtime.
   * Runtime: O(1)
   * @param {any} value node's value
   * @returns {Node} newly created node
   */
  addLast(value) {
    const newNode = new Node(value)

    if (this.first) {
      newNode.previous = this.last
      this.last.next = newNode
      this.last = newNode
    } else {
      this.first = newNode
      this.last = newNode
    }

    this.size++

    return newNode
  }

  /**
   * Insert new element at the given position (index)
   *
   * @param {any} value new node's value
   * @param {Number} position position to insert element
   * @returns {Node} new node or 'undefined' if the index is out of bound.
   */
  add(value, position = 0) {
    if (position === 0) {
      return this.addFirst(value)
    }

    if (position === this.size) {
      return this.addLast(value)
    }

    const current = this.get(position)

    if (current) {
      const newNode = new Node(value)
      newNode.previous = current.previous
      newNode.next = current

      current.previous.next = newNode

      if (current.next) current.next.previous = newNode

      this.size++

      return newNode

    }

    return
  }

  /**
   * Search by value. It finds first occurrence  of
   * the element matching the value.
   * Runtime: O(n)
   * @param {any} value
   * @returns {number} return index or undefined
   */
  indexOf(value) {
    return this.find((current, position) => {
      if (current.value === value) return position
      return
    })
  }

  /**
   * Search by index
   * Runtime: O(n)
   * @param {Number} index position of the element
   * @returns {Node} element at the specified position in this list.
   */
  get(index = 0) {
    return this.find((current, position) => {
      if (position === index) {
        return current
      }
      return
    })
  }

  /**
   * Iterate through the list until callback returns thruthy
   * @param {Function} callback evaluates node and index
   * @returns {any} callbacks's return value
   */
  find(callback) {
    for (let current = this.first, position =0;
      current;
      position++, current = current.next ) {
      const result = callback(current, position)
      if (result !== undefined) return result
    }

    return
  }

  /**
   * Removes element from the start of the list (head/root).
   * Similar to Array.shift
   * Runtime: O(1)
   * @returns {any} the first element's value which was removed.
   */
  removeFirst() {
    const head = this.head

    if (head) {
      this.first = this.head.next
      if (this.first) {
        this.first.previous = null
      }
      this.size--
    } else {
      this.last = null
    }

    return head && head.value
  }

  /**
   * Removes element to the end of the list. Similar to Array.pop
   * Using the `last.previous` we can reduce the runtime from O(n) to O(1)
   * Runtime: O(1)
   * @returns {value} the last element's value which was removed
   */
  removeLast() {
    const tail = this.last

    if (tail) {
      this.last = tail.previous
      if (this.last) {
        this.last.next = null
      } else {
        this.first = null
      }
      this.size--
    }

    return tail && tail.value
  }

  /**
   * Removes the element at the specified position in this list.
   * Runtime: O(n)
   * @param {any} position
   * @returns {any} the element's value at the specified position that was removed.
   */
  removeByPosition(positon = 0) {
    const current = this.get(positon)

    if (position === 0) {
      this.removeFirst()
    } else if (positon === this.size - 1) {
      this.removeLast()
    } else if (current) {
      current.previous.next = current.next
      current.next.previous = current.previous
      this.size-- 
    }

    return current && current.value
  }

  /**
   * Removes the first occurrence of the specified elementt
   * from this list, if it is present.
   * Runtime: O(n)
   * @param {any} callbackOrIndex callback or position index to remove
   */
  remove(callbackOrIndex) {
    if (typeof callbackOrIndex !== 'function') {
      return this.removeByPosition(parseInt(callbackOrIndex) || 0)
    }

    const position = this.removeByPosition.find((node, index) => {
      if (callbackOrIndex(node, index)) {
        return index
      }
      return
    })

    if (position !== undefined) return this.removeByPosition(position)

    return false
  }

  /**
   * Iterate through the list yield on each node
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#User-defined_iterables
   */
  * [Symbol.iterator]() {
    for (let node = this.first, position = 0;
      node;
      node = node.next,
      position++) {
      yield { node, position, }
    }
  }
}