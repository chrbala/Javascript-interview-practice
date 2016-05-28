import test from 'tape'

import Queue from './shelter'

test('Queue shelter enqueue/dequeue cat/dog', t => {
	var stack = Queue.of()
	t.deepEqual(stack.serialize(), { cats: [], dogs: [] })

	stack.enqueueCat('Jimmy')
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'Jimmy', id: 0}], dogs: [] 
	})

	stack.enqueueDog('Fred')
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'Jimmy', id: 0}], dogs: [{name: 'Fred', id: 1}] 
	})

	stack.enqueueCat('George')
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'Jimmy', id: 0}, {name: 'George', id: 2}], dogs: [{name: 'Fred', id: 1}] 
	})

	stack.dequeueCat()
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'George', id: 2}], dogs: [{name: 'Fred', id: 1}] 
	})

	stack.dequeueCat()
	t.deepEqual(stack.serialize(), { 
		cats: [], dogs: [{name: 'Fred', id: 1}] 
	})

	stack.dequeueDog()
	t.deepEqual(stack.serialize(), { 
		cats: [], dogs: [] 
	})

	t.end()
})

test('Queue shelter dequeueAny', t => {
	var stack = Queue.of()
	t.deepEqual(stack.serialize(), { cats: [], dogs: [] })

	stack.enqueueCat('Jimmy')
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'Jimmy', id: 0}], dogs: [] 
	})

	stack.enqueueDog('Fred')
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'Jimmy', id: 0}], dogs: [{name: 'Fred', id: 1}] 
	})

	stack.dequeueAny()
	t.deepEqual(stack.serialize(), { 
		cats: [], dogs: [{name: 'Fred', id: 1}] 
	})

	stack.dequeueAny()
	t.deepEqual(stack.serialize(), { 
		cats: [], dogs: [] 
	})

	stack.enqueueCat('George')
	t.deepEqual(stack.serialize(), { 
		cats: [{name: 'George', id: 2}], dogs: [] 
	})

	stack.dequeueAny()
	t.deepEqual(stack.serialize(), { 
		cats: [], dogs: [] 
	})

	t.end()
})