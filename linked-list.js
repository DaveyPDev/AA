/** Node: node for a singly linked list. */

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor (vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push (val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift (val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop () {
		if (this.length === 1) {
			const removeVal = this.head.val;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return removeVal;
		}

		let currentNode = this.head;
		let prev = null;

		while (currentNode.next !== null) {
			prev = currentNode;
			currentNode = currentNode.next;
		}
		prev.next = null;
		this.tail = prev;
		this.length--;
		return currentNode.val;
	}

	/** shift(): return & remove first item. */

	shift () {
		if (this.isEmpty()) {
			throw new Error('List is empty');
		}
		const removedVal = this.head.val;
		this.head = this.head.next;
		this.length--;
    if (this.length === 0){
      this.tail = null
    }

		return removedVal;
	}

	/** getAt(idx): get val at idx. */

	getAt (idx) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Index not included');
		}
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		return current.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt (idx, val) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Index not included');
		}
		let current = this.head;
		for (let i = 0; i < idx; i++) {
			current = current.next;
		}
		current.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt (idx, val) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Index out of bounds');
		}
		if (idx === 0) {
			this.unshift(val);
			return;
		}
		if (idx === this.length) {
			this.push(val);
			return;
		}

		const newNode = new Node(val);
		let current = this.head;
		let prev = null;
		for (let i = 0; i < idx; i++) {
			prev = current;
			current = current.next;
		}
		newNode.next = current;
		prev.next = newNode;
		this.length++;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index out of bounds');
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }

    let current = this.head;
    let prev = null;
    for (let i = 0; i < idx; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.length--;
    if (idx === this.length) {
      this.tail = prev
    }
    return current.val;
  }
	/** average(): return an average of all values in the list */

	average() {
    if (this.length === 0) {
      return 0; 
    }
  
    let sum = 0;
    let currentNode = this.head;
  
    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
  
    return sum / this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = LinkedList;
