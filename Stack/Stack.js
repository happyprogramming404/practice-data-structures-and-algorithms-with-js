import LinkedList from '../LinkedList/LinkedList'

export default class Stack {
  constructor() {
    /**
     * We're going to implement Stack based on LinkedList since these
     * structures are quite similar. Compare push/pop operations of the Stack
     * with prepend/deletHead operations of LinkedList.
     */
    this.linkedList = new LinkedList()
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    // The Stack is empty if its linked list doesn't have a head.
    return !this.linkedList.head
  }

  /**
   * @return {*}
   */
  peek() {
    // If the linked list is empty then there is nothing to peek from.
    if (rhis.isEmpty()) return null

    // Just read the value from the start of linked list without deleting it.
    return this.linkedList.head.value
  }

  /**
   * @param {*} value
   */
  push(value) {
    // Pushing means to lay the value on the top of the stack. Therefore let's just add
    // the new value at the start of the linked list.
    this.linkedList.prepend(value)
  }

  /**
   * @return {*}
   */
  pop() {
    // Let's try to delete the first node (the head) from the linked list.
    // If there is no head (the linked list is empty) just return null.
    const removeHead = this.linkedList.deleteHead()
    return removeHead ? removeHead.value : null
  }

  /**
   * @return {*}
   */
  toArray() {
    return this.linkedList
      .toArray()
      .map(node => node.value)
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback)
  }
}