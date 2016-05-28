// Question 2.1
import LinkedList from './LinkedList'

export default class extends LinkedList {
	removeDuplicates() {
		if (!this.head)
			return

		var uniqueData = {}
		var previous = null
		var curr = this.head

		do
			if (uniqueData[curr.data])
				previous.next = curr.next
			else {
				uniqueData[curr.data] = true
				previous = curr
			}
		while (curr = curr.next)
	}
}

export class LinkedListNoBuffer extends LinkedList {
	_removeDuplicatesFromNode(curr) {
		var { data } = curr
		var previous = curr

		while (curr = curr.next)
			if (curr.data == data)
				previous.next = curr.next
			else
				previous = curr
	}

	removeDuplicates() {
		this.forEach((data, node) => this._removeDuplicatesFromNode(node))
	}
}