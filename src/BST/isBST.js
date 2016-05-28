// Question 4.5
import BST from './BST'

export default class extends BST {
	isBST(node = this.root, min, max) {
		if (!node)
			return true

		if (min !== undefined && node.data <= min)
			return false

		if (max !== undefined && node.data > max)
			return false

		return this.isBST(node.left, min, node.data) 
			&& this.isBST(node.right, node.data, max)
	}
}