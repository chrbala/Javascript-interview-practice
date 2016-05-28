import LinkedList from '../linkedList/LinkedList'

export default class Stack {
	constructor(stack = new LinkedList()) {
		this.stack = stack
	}

	static of(list) {
		return new this.prototype.constructor(list)
	}

	static fromArray(arr) {
		var list = LinkedList.fromArray(arr)
		return this.of(list)
	}

	toArray() {
		return this.stack.toArray()
	}

	push(data) {
		this.stack.unshift(data)
	}

	pop() {
		return this.stack.shift()
	}

	peek() {
		var node = this.stack.get(0)
		return node && node.data
	}

	isEmpty() {
		return !this.stack.get(0)
	}
}