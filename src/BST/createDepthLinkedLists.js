// Question 4.4
import BST from './BST'
import LinkedList from '../linkedList/LinkedList'

export default class extends BST {
	createLists() {
		var lists = []
		this.inOrder((data, depth) => {
			var list = lists[depth] = lists[depth] || LinkedList.of()
			list.push(data)
		})

		return lists
	}
}