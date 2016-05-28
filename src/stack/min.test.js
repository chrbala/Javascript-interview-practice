import test from 'tape'

import Stack from './min'

test('Stack with min', t => {
	var stack = Stack.of()
	t.equal(stack.min(), null)

	stack.push(1)
	t.equal(stack.min(), 1)

	stack.push(2)
	t.equal(stack.min(), 1)

	stack.push(0)
	t.equal(stack.min(), 0)

	stack.pop()
	t.equal(stack.min(), 1)

	stack.pop()
	t.equal(stack.min(), 1)

	stack.pop()
	t.equal(stack.min(), null)

	t.end()
})