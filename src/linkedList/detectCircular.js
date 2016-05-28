// Question 2.6
import LinkedList from './LinkedList'

export default class extends LinkedList {
	// note: this is not the algorithm expected here, but JS provides a nice
	// WeakMap that allows for a very elegant and efficient solution
	static detectCircular(list) {
		var map = new WeakMap()
		var curr = list.head

		do {
			if (map.has(curr))
				return true

			map.set(curr)
		}	while (curr = curr.next)

		return false
	}
}