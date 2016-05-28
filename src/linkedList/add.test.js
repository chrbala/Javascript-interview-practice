import test from 'tape'

import LinkedList from './add'

test('LinkedList add without carry', t => {
	var list1 = LinkedList.fromArray([1, 2, 3])
	var list2 = LinkedList.fromArray([1, 2, 3])
	var sumList = LinkedList.add(list1, list2)
	t.deepEqual(sumList.toArray(), [2, 4, 6])
	t.end()
})

test('LinkedList add with carry', t => {
	var list1 = LinkedList.fromArray([7, 1, 6])
	var list2 = LinkedList.fromArray([5, 9, 2])
	var sumList = LinkedList.add(list1, list2)
	t.deepEqual(sumList.toArray(), [2, 1, 9])
	t.end()
})

test('LinkedList add empty', t => {
	var list1 = LinkedList.fromArray([])
	var list2 = LinkedList.fromArray([])
	var sumList = LinkedList.add(list1, list2)
	t.deepEqual(sumList.toArray(), [])
	t.end()
})

test('LinkedList add different magnitudes', t => {
	var list1 = LinkedList.fromArray([1, 2, 3])
	var list2 = LinkedList.fromArray([1, 2])
	var sumList = LinkedList.add(list1, list2)
	t.deepEqual(sumList.toArray(), [2, 4, 3])
	t.end()
})

test('LinkedList add empty to number', t => {
	var list1 = LinkedList.fromArray([1, 2, 3])
	var list2 = LinkedList.fromArray([])
	var sumList = LinkedList.add(list1, list2)
	t.deepEqual(sumList.toArray(), [1, 2, 3])
	t.end()
})

test('LinkedList add number to empty', t => {
	var list1 = LinkedList.fromArray([])
	var list2 = LinkedList.fromArray([1, 2, 3])
	var sumList = LinkedList.add(list1, list2)
	t.deepEqual(sumList.toArray(), [1, 2, 3])
	t.end()
})