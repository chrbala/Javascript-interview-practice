import test from 'tape'

import BST from './isBST'

test('BST isBST, positive', t => {
	var tree = BST.of({
		data: 10,
		left: { data: 9, left: null, right: null },
		right: { data: 11, left: null, right: null }
	})
	t.equal(tree.isBST(), true)
	t.end()
})

test('BST isBST, negative', t => {
	var tree = BST.of({
		data: 10,
		left: { data: 9, left: null, right: null },
		right: { data: 10, left: null, right: null }
	})
	t.equal(tree.isBST(), false)
	t.end()
})

test('BST isBST, negative complex', t => {
	var tree = BST.of({
		data: 20,
		left: {
			data: 10,
			left: null,
			right: { data: 25, left: null, right: null}
		},
		right: {
			data: 30,
			left: null,
			right: null
		}
	})
	t.equal(tree.isBST(), false)
	t.end()
})