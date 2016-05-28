import test from 'tape'

import LinkedList from './LinkedList'

test('Create LinkedList', t => {
	var list = LinkedList.fromArray([1, 2, 3])
	t.deepEqual(list, {
		head: {
			data: 1,
			next: {
				data: 2,
				next: {
					data: 3,
					next: null
				}
			}
		}
	})
	t.end()
})

test('LinkedList toArray', t => {
	var list = LinkedList.fromArray([1, 2, 3])
	t.deepEqual(list.toArray(), [1, 2, 3])
	t.end()
})

test('LinkedList map', t => {
	var list = LinkedList.fromArray([1, 2, 3])
	var double = list.map(num => num * 2)
	t.deepEqual(double, [2, 4, 6])
	t.end()
})

test('LinkedList push', t => {
	var list = new LinkedList()
	t.deepEqual(list.toArray(), [])
	list.push(1)
	t.deepEqual(list.toArray(), [1])
	t.end()
})

test('LinkedList pop', t => {
	var list = LinkedList.fromArray([1, 2])
	var popped

	popped = list.pop()
	t.deepEqual(list.toArray(), [1])
	t.equal(popped, 2)
	
	popped = list.pop()
	t.deepEqual(list.toArray(), [])
	t.equal(popped, 1)

	t.end()
})

test('LinkedList unshift', t => {
	var list = new LinkedList()
	list.unshift(1)
	t.deepEqual(list.toArray(), [1])
	list.unshift(0)
	t.deepEqual(list.toArray(), [0, 1])
	t.end()
})

test('LinkedList shift', t => {
	var list = LinkedList.fromArray([1, 2])
	var shifted

	shifted = list.shift()
	t.deepEqual(list.toArray(), [2])
	t.equal(shifted, 1)
	
	shifted = list.shift()
	t.deepEqual(list.toArray(), [])
	t.equal(shifted, 2)

	t.end()
})

test('LinkedList get', t => {
	var list = LinkedList.fromArray([0, 1, 2])
	t.equal(list.get(0).data, 0)
	t.equal(list.get(1).data, 1)
	t.equal(list.get(2).data, 2)
	t.equal(list.get(3), null)
	t.end()
})