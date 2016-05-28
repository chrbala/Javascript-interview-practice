import test from 'tape'

import LinkedList from './partition'

test('LinkedList partition middle', t => {
	var list = LinkedList.fromArray([1, 11, 2, 12, 3, 13, 4, 14, 5, 15])
	list.partition(10)
	t.deepEqual(list.toArray(), [1, 2, 3, 4, 5, 11, 12, 13, 14, 15])
	t.end()
})

test('LinkedList partition beginning', t => {
	var list = LinkedList.fromArray([1, 2, 3, 4, 5])
	list.partition(0)
	t.deepEqual(list.toArray(), [1, 2, 3, 4, 5])
	t.end()
})

test('LinkedList partition end', t => {
	var list = LinkedList.fromArray([1, 2, 3, 4, 5])
	list.partition(10)
	t.deepEqual(list.toArray(), [1, 2, 3, 4, 5])
	t.end()
})

test('LinkedList partition empty list', t => {
	var list = LinkedList.fromArray([])
	list.partition(10)
	t.deepEqual(list.toArray(), [])
	t.end()
})