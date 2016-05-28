import test from 'tape'

import Stack from './set'

test('Stack of stacks', t => {
	var stack = Stack.of(3)
	t.deepEqual(stack.serialize(), [])

	stack.push(1)
	t.deepEqual(stack.serialize(), [[1]])

	stack.push(2)
	t.deepEqual(stack.serialize(), [[2, 1]])

	stack.push(3)
	t.deepEqual(stack.serialize(), [[3, 2, 1]])

	stack.push(4)
	t.deepEqual(stack.serialize(), [[4], [3, 2, 1]])

	stack.pop()
	t.deepEqual(stack.serialize(), [[3, 2, 1]])

	stack.pop()
	t.deepEqual(stack.serialize(), [[2, 1]])

	stack.pop()
	t.deepEqual(stack.serialize(), [[1]])

	stack.pop()
	t.deepEqual(stack.serialize(), [])

	t.end()
})