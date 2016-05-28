export default class LinkedList {
	constructor() {
		this.head = null
	}

	static of() {
		return new this.prototype.constructor()
	}

	static fromArray(arr) {
		var list = this.of()
		arr.forEach(data => list.push(data))
		return list
	}

	forEach(f) {
		if (!this.head)
			return

		var curr = this.head
		do 
			f(curr.data, curr)
		while (curr = curr.next)
	}

	toArray() {
		var arr = []
		this.forEach(data => arr.push(data))
		return arr
	}

	map(f) {
		var arr = []
		this.forEach(data => arr.push(f(data)))
		return arr
	}

	push(data) {
		var node = { data, next: null }

		if (!this.head)
			this.head = node
		else {
			var curr = this.head
			while (curr.next)
				curr = curr.next

			curr.next = node
		}
	}

	pop() {
		if (!this.head)
			throw new Error('Cannot pop from empty list')

		if (!this.head.next) {
			var { data } = this.head
			this.head = null
			return data
		}

		var prev = null
		var curr = this.head
		while (curr.next) {
			prev = curr
			curr = curr.next
		}

		prev.next = null

		return curr.data
	}

	unshift(data) {
		var node = { data, next: this.head }
		this.head = node
	}

	shift() {
		if (!this.head)
			throw new Error('Cannot shift from an empty list')

		var { data, next } = this.head
		this.head = next
		return data
	}

	get(index) {
		var foundNode = null
		var curr = 0

		// note: this is not performant as it is not returning early
		this.forEach((data, node) => {
			if (curr++ == index)
				foundNode = node
		})

		return foundNode
	}
}