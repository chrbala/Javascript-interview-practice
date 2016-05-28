// Question 4.1
import BST from './BST'

export default class extends BST {
	isBalanced(node = this.root) {
		if (!node)
			return true

		var left = node.left && this.isBalanced(node.left)
		var right = node.right && this.isBalanced(node.right)

		if (Math.abs(left - right) > 1)
			return false
		else if (node == this.root)
			return true

		var childHeight = left > right ? left : right
		return childHeight + 1
	}
}