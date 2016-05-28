// Question 2.4
import LinkedList from './LinkedList'

export default class extends LinkedList {
	partition(k) {
		var lesserHead = null
		var lesserTail = null
		var greaterHead = null
		var greaterTail = null

		var curr = this.head
		if (!curr)
			return

		do
			if (curr.data > k)
				if (!greaterHead)
					greaterHead = greaterTail = curr
				else
					greaterTail = greaterTail.next = curr
			else
				if (!lesserHead)
					lesserHead = lesserTail = curr
				else 
					lesserTail = lesserTail.next = curr
		while (curr = curr.next)

		if (!lesserHead) {
			this.head = greaterHead
			return
		}

		lesserTail.next = greaterHead
		this.head = lesserHead
	}
}