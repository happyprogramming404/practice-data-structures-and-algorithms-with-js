class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  toString(callback) {
    return typeof callback === 'function' ? callback(this.value) : `${this.value}` 
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    if (this.head) this.head.previous = newNode

    this.head = newNode

    if (!this.tail) this.tail = newNode

    return this
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode 

    newNode.previous = this.tail

    this.tail = newNode

    return this
  }

  delete(value) {
    if (!this.head) return null

    let deleteNode = null
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        deleteNode = currentNode

        if (deleteNode === this.head) {
          this.head = deleteNode.next

          if (this.head) this.head.previous = null
          
          if (deleteNode === this.tail) this.tail = null
        }
      } else if (deleteNode === this.tail) {
        this.tail = deleteNode.previous
        this.tail.next = null
      } else {
        const previousNode = deleteNode.previous
        const nextNode = deleteNode.next

        previousNode.next = nextNode
        nextNode.previous = previousNode
      }

      currentNode = currentNode.next
    }

    return deleteNode
  }

  find({ value, callback, }) {
    if (!this.head) return null

    let currentNode = this.head

    while (currentNode) {
      if (typeof callback === 'function' && callback(currentNode.value)) return currentNode
      
      if (currentNode.value === value) return currentNode

      currentNode = currentNode.next
    }
    return null
  }

  deleteHead() {
    if (!this.head) return null

    const deleteHead = this.head

    if (this.head.next) {
      this.head = this.head.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }

    return deleteHead
  }

  deleteTail() {
    if (!this.tail) return null

    const deleteTail = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail =null

      return deleteTail
    }

    this.tail = this.tail.previous
    this.tail.next = null

    return deleteTail
  }

  toArray() {
    const nodes = []
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  fromArray(values) {
    values.forEach(value => this.append(value))
    return this
  }

  toString(callback) {
    return this.toArray().map(node =>  node.toString(callback)).toString()
  }

  reverse() {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null

    while (currentNode) {
      nextNode = currentNode.next
      prevNode = currentNode.previous

      currentNode.next = prevNode
      currentNode.previous = nextNode

      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode
  }
}