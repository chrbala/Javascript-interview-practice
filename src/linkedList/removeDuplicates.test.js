import test from 'tape'

import LinkedListBuffer, { LinkedListNoBuffer } from './removeDuplicates'

const check = (type, LinkedList) => {
	test(`${type} remove duplicates`, t => {
		var list = LinkedList.fromArray([1, 2, 3, 1])
		list.removeDuplicates()
		t.deepEqual(list.toArray(), [1, 2, 3])
		t.end()
	})

	test(`${type} remove duplicates from empty array`, t => {
		var list = LinkedList.fromArray([])
		list.removeDuplicates()
		t.deepEqual(list.toArray(), [])
		t.end()
	})

	test(`${type} remove all elements as duplicates`, t => {
		var list = LinkedList.fromArray([1, 1, 1, 1, 1])
		list.removeDuplicates()
		t.deepEqual(list.toArray(), [1])
		t.end()
	})
}

check('LinkedList', LinkedListBuffer)
check('LinkedList no buffer', LinkedListNoBuffer)