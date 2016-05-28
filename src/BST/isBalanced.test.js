import test from 'tape'

import BST from './isBalanced'

test('BST is balanced, empty tree', t => {
	var tree = BST.of()
	t.equal(tree.isBalanced(), true)
	t.end()
})

test('BST is balanced, longer left', t => {
	var tree = BST.of({
		data: 0,
		left: {
			data: 1,
			left: null,
			right: null
		},
		right: null
	})
	t.equal(tree.isBalanced(), true)
	t.end()
})

test('BST is balanced, longer right', t => {
	var tree = BST.of({
		data: 0,
		left: null,
		right: {
			data: 1,
			left: null,
			right: null
		}
	})
	t.equal(tree.isBalanced(), true)
	t.end()
})

test('BST is not balanced, longer right', t => {
	var tree = BST.of({
		data: 0,
		left: null,
		right: {
			data: 1,
			left: null,
			right: {
				data: 2,
				left: null,
				right: null
			}
		}
	})
	t.equal(tree.isBalanced(), false)
	t.end()
})

test('BST is not balanced, longer left', t => {
	var tree = BST.of({
		data: 0,
		left: {
			data: 1,
			left: {
				data: 2,
				left: null,
				right: null
			},
			right: null
		},
		right: null
	})
	t.equal(tree.isBalanced(), false)
	t.end()
})