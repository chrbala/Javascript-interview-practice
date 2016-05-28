import test from 'tape'

import BST from './createFromSortedArray'

test('BST create from sorted array', t => {
	var tree = BST.createFromSortedArray([1, 2, 3])
	t.deepEqual(tree.serialize(), {
		data: 2,
		left: { data: 1, left: null, right: null },
		right: { data: 3, left: null, right: null }
	})
	t.end()
})

test('BST create from empty array', t => {
	var tree = BST.createFromSortedArray([])
	t.deepEqual(tree.serialize(), null)
	t.end()
})