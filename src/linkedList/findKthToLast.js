// Question 2.2
import LinkedList from './LinkedList'

export default class extends LinkedList {
	findKthToLast(k) {
		if (!this.head)
			return null

		var curr = this.head
		var slow = this.head
		var index = 0
		
		while (index++ < k && (curr = curr.next));

		if (!curr)
			return null

		while (curr = curr.next)
			slow = slow.next

		return slow.data
	}
}