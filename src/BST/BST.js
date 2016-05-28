var removeNode = Symbol('removeNode')

export default class BST {
	constructor(data = null) {
		this.root = data
	}

	static of(data) {
		return new this.prototype.constructor(data)
	}

	makeNode(data, left = null, right = null) {
		return { data, left, right }
	}

	serialize() {
		return this.root
	}

	insert(data, node = this.root) {
		if (!node) {
			this.root = this.makeNode(data)
			return
		}

		if (data <= node.data)
			if (node.left)
				this.insert(data, node.left)
			else
				node.left = this.makeNode(data)
		else
			if (node.right)
				this.insert(data, node.right)
			else
				node.right = this.makeNode(data)
	}

	[removeNode](node) {
		var { right } = node

		Object.assign(node, node.left)
		if (!right)
			return

		var curr = node
		while (curr.right)
			curr = curr.left

		curr.right = right
	}

	remove(data, node = this.root) {
		if (!node)
			return

		if (data < node.data) {
			if (this.remove(data, node.left)) 
				node.left = null
		} else if (data > node.data) {
			if (this.remove(data, node.right))
				node.right = null
		}
		else if (node.left || node.right) 
			this[removeNode](node)
		else if (node != this.root)
			return true
		else
			this.root = null
	}

	inOrder(f, node = this.root, depth = 0) {
		if (!node)
			return

		if (node.left)
			this.inOrder(f, node.left, depth + 1)

		f(node.data, depth)

		if (node.right)
			this.inOrder(f, node.right, depth + 1)
	}

	preOrder(f, node = this.root, depth = 0) {
		if (!node)
			return

		f(node.data, depth)

		;[node.left, node.right].forEach(child => 
			this.preOrder(f, child, depth + 1)
		)
	}

	postOrder(f, node = this.root, depth = 0) {
		if (!node)
			return

		[node.left, node.right].forEach(child => 
			this.postOrder(f, child, depth + 1)
		)

		f(node.data, depth)
	}
}