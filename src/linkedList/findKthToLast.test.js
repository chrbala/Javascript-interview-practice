import test from 'tape'

import LinkedList from './findKthToLast'

test('LinkedList find kth element', t => {
	var list = LinkedList.fromArray([1, 2, 3, 4, 5])
	t.equal(list.findKthToLast(0), 5)
	t.equal(list.findKthToLast(2), 3)
	t.equal(list.findKthToLast(4), 1)
	t.equal(list.findKthToLast(5), null)
	t.end()
})