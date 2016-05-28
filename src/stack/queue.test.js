import test from 'tape'

import Queue from './queue'

test('Queue', t => {
	var queue = Queue.of()
	t.deepEqual(queue.toArray(), [])

	queue.push(1)
	t.deepEqual(queue.toArray(), [1])

	queue.push(2)
	t.deepEqual(queue.toArray(), [1, 2])

	t.equal(queue.peek(), 1)
	t.equal(queue.pop(), 1)
	t.deepEqual(queue.toArray(), [2])

	t.equal(queue.peek(), 2)
	t.equal(queue.pop(), 2)
	t.deepEqual(queue.toArray(), [])

	t.end()
})