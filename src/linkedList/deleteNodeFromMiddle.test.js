import test from 'tape'

import LinkedList from './deleteNodeFromMiddle'

test('LinkedList delete first node', t => {
	var list = LinkedList.fromArray([0, 1, 2, 3, 4, 5])
	var node = list.get(0)
	list.deleteNodeFromMiddle(node)
	t.deepEqual(list.toArray(), [1, 2, 3, 4, 5])
	t.end()
})

test('LinkedList delete node from middle', t => {
	var list = LinkedList.fromArray([0, 1, 2, 3, 4, 5])
	var node = list.get(2)
	list.deleteNodeFromMiddle(node)
	t.deepEqual(list.toArray(), [0, 1, 3, 4, 5])
	t.end()
})