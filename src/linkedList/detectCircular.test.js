import test from 'tape'

import LinkedList from './detectCircular'

test('LinkedList detect circular negative', t => {
	var list = LinkedList.fromArray([0, 1, 2, 3])
	t.equal(LinkedList.detectCircular(list), false)
	t.end()
})

test('LinkedList detect circular positive', t => {
	var list = LinkedList.fromArray([0, 1, 2, 3])
	var tail = list.get(3)
	tail.next = list.head
	t.equal(LinkedList.detectCircular(list), true)
	t.end()
})