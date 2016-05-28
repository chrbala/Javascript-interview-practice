// Question 3.5
import Stack from './Stack'

var swap = Symbol('swap')
var putInReadOrder = Symbol('putInReadOrder')
var putInWriteOrder = Symbol('putInWriteOrder')

export default class Queue {
	constructor() {
		this.readOrder = Stack.of()
		this.writeOrder = Stack.of()
	}

	static of() {
		return new this.prototype.constructor()
	}

	[swap](fromStack, toStack) {
		while (!fromStack.isEmpty())
			toStack.push(fromStack.pop())
	}

	[putInReadOrder]() {
		if (!this.writeOrder.isEmpty())
			this[swap](this.writeOrder, this.readOrder)
	}

	[putInWriteOrder]() {
		if (!this.readOrder.isEmpty())
			this[swap](this.readOrder, this.writeOrder)
	}

	toArray() {
		this[putInReadOrder]()
		return this.readOrder.toArray()
	}

	push(data) {
		this[putInWriteOrder]()
		this.writeOrder.push(data)
	}

	peek() {
		this[putInReadOrder]()
		return this.readOrder.peek()
	}

	pop() {
		this[putInReadOrder]()
		return this.readOrder.pop()
	}
}