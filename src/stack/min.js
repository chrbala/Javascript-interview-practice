// Question 3.2
import Stack from './Stack'

export default class {
	constructor() {
		this.stack = Stack.of()
		this.minStack = Stack.of()
	}

	static of() {
		return new this.prototype.constructor()
	}

	serialize() {
		var stack = this.stack.toArray()
		var minStack = this.stack.toArray()

		return { stack, minStack }
	}

	push(data) {
		this.stack.push(data)
		var lastMin = this.minStack.peek()
		if (lastMin === null || data <= lastMin)
			this.minStack.push(data)
	}

	pop() {
		var popped = this.stack.pop()
		if (this.minStack.peek() == popped)
			this.minStack.pop()
	}

	min() {
		return this.minStack.peek()
	}
}