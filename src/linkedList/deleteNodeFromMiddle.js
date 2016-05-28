// Question 2.3
import LinkedList from './LinkedList'

export default class extends LinkedList {
	// pre: node is not the last element
	deleteNodeFromMiddle(node) {
		Object.assign(node, node.next)
	}
}