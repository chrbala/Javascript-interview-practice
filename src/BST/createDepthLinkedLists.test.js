import test from 'tape'

import BST from './createDepthLinkedLists'

const serializeTree = tree => tree.createLists().map(list => list.toArray())

test('BST create linked list, empty BST', t => {
	var tree = BST.of()
	t.deepEqual(serializeTree(tree), [])
	t.end()
})

test('BST create linked list, head only', t => {
	var tree = BST.of()
	tree.insert(10)
	t.deepEqual(serializeTree(tree), [[10]])
	t.end()
})

test('BST create linked list, 2 layers, 1 partially complete', t => {
	var tree = BST.of()
	tree.insert(10)
	tree.insert(9)
	t.deepEqual(serializeTree(tree), [[10], [9]])
	t.end()
})

test('BST create linked list, two complete layers', t => {
	var tree = BST.of()
	tree.insert(10)
	tree.insert(9)
	tree.insert(11)
	t.deepEqual(serializeTree(tree), [[10], [9, 11]])
	t.end()
})