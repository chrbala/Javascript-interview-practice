import test from 'tape'

import Stack from './Stack'

test('Stack to/from arrays', t => {
	var stack = Stack.fromArray([1, 2, 3])
	t.deepEqual(stack.toArray(), [1, 2, 3])
	t.end()
})

test('Stack push', t => {
	var stack = Stack.fromArray([1, 2, 3])
	stack.push(0)
	t.deepEqual(stack.toArray(), [0, 1, 2, 3])
	t.end()
})

test('Stack pop', t => {
	var stack = Stack.fromArray([1, 2, 3])
	stack.pop()
	t.deepEqual(stack.toArray(), [2, 3])
	t.end()
})

test('Stack peek', t => {
	var stack = Stack.fromArray([1, 2, 3])
	t.equal(stack.peek(), 1)
	t.end()
})

test('Stack peek when empty', t => {
	var stack = Stack.of()
	t.equal(stack.peek(), null)
	t.end()
})

test('Stack is empty', t => {
	var stack = Stack.of()
	t.equal(stack.isEmpty(), true)
	t.end()
})

test('Stack is not empty', t => {
	var stack = Stack.fromArray([1, 2, 3])
	t.equal(stack.isEmpty(), false)
	t.end()
})