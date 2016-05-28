// Question 2.5
import LinkedList from './LinkedList'

export default class extends LinkedList {
	static add(list1, list2) {
		var sumList = this.of()
		var curr1 = list1.head
		var curr2 = list2.head

		if (!curr1)
			return list2
		else if (!curr2)
			return list1

		var carry = false
		var last = null
		do {
			var sum = curr1.data + curr2.data
			if (carry)
				sum++

			if (sum >= 10) {
				sum -= 10
				carry = true
			} else
				carry = false

			var next = { data: sum, next: null }
			if (!sumList.head)
				last = sumList.head = next
			else
				last = last.next = next
			
			curr1 = curr1.next
			curr2 = curr2.next
		} while (curr1 && curr2)

		var extra = curr1 || curr2
		if (extra)
			do
				last = last.next = { data: extra.data, next: null }
			while (extra = extra.next)

		return sumList
	}
}