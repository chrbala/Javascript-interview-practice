// Question 3.3
import Stack from './Stack'

export default class {
	constructor(capacity = 3) {
		this.stackOfStacks = Stack.of()
		this.capacity = capacity
		this.topLength = capacity
	}

	static of(capacity) {
		return new this.prototype.constructor(capacity)
	}

	serialize() {
		return this.stackOfStacks.toArray().map(stack => stack.toArray())
	}

	push(data) {
		var topStack
		if (this.topLength >= this.capacity) {
			topStack = Stack.of()
			this.stackOfStacks.push(topStack)
			this.topLength = 0
		}
		else
			topStack = this.stackOfStacks.peek()

		topStack.push(data)
		this.topLength++
	}

	pop() {
		var topStack = this.stackOfStacks.peek()
		var data = topStack.pop()

		if (topStack.peek() === null) {
			this.stackOfStacks.pop()
			this.topLength = this.capacity
		} else
			this.topLength--
	}
}