import test from 'tape'

import BST from './BST'

test('BST', t => {
	var tree = BST.of()
	t.deepEqual(tree.serialize(), null)

	tree.insert(10)
	t.deepEqual(tree.serialize(), { data: 10, left: null, right: null })

	tree.insert(9)
	t.deepEqual(tree.serialize(), { 
		data: 10, 
		left: { data: 9, left: null, right: null }, 
		right: null 
	})

	tree.insert(9)
	t.deepEqual(tree.serialize(), { 
		data: 10, 
		left: { 
			data: 9, 
			left: { data: 9, left: null, right: null }, 
			right: null 
		}, 
		right: null 
	})

	tree.insert(11)
	t.deepEqual(tree.serialize(), { 
		data: 10, 
		left: { 
			data: 9, 
			left: { data: 9, left: null, right: null }, 
			right: null 
		}, 
		right: { data: 11, left: null, right: null } 
	})

	tree.remove(10)
	t.deepEqual(tree.serialize(), { 
		data: 9, 
		left: { data: 9, left: null, right: null }, 
		right: { data: 11, left: null, right: null }  
	})

	tree.remove(9)
	t.deepEqual(tree.serialize(), { 
		data: 9, 
		left: null, 
		right: { data: 11, left: null, right: null }  
	})

	tree.remove(11)
	t.deepEqual(tree.serialize(), { 
		data: 9, 
		left: null, 
		right: null 
	})

	tree.remove(9)
	t.deepEqual(tree.serialize(), null)

	t.end()
})

test('BST inOrder traversal', t => {
	var tree = BST.of()
	tree.insert(10)
	tree.insert(9)
	tree.insert(11)

	var dataInOrder = []
	tree.inOrder((data, depth) => dataInOrder.push({data, depth}))
	t.deepEqual(dataInOrder, [
		{data: 9, depth: 1},
		{data: 10, depth: 0},
		{data: 11, depth: 1}
	])
	t.end()
})

test('BST preOrder traversal', t => {
	var tree = BST.of()
	tree.insert(10)
	tree.insert(9)
	tree.insert(11)

	var dataInOrder = []
	tree.preOrder((data, depth) => dataInOrder.push({data, depth}))
	t.deepEqual(dataInOrder, [
		{data: 10, depth: 0},
		{data: 9, depth: 1},
		{data: 11, depth: 1}
	])
	t.end()
})

test('BST postOrder traversal', t => {
	var tree = BST.of()
	tree.insert(10)
	tree.insert(9)
	tree.insert(11)

	var dataInOrder = []
	tree.postOrder((data, depth) => dataInOrder.push({data, depth}))
	t.deepEqual(dataInOrder, [
		{data: 9, depth: 1},
		{data: 11, depth: 1},
		{data: 10, depth: 0}
	])
	t.end()
})