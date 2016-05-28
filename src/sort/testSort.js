import test from 'tape'

export default (type, sort) => test(`${type} sort`, t => {
	t.deepEqual(sort([]), [])
	t.deepEqual(sort([1, 3, 2]), [1, 2, 3])
	t.deepEqual(sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
	t.deepEqual(sort([1, 100, 58, 3, 27, 9, 57, 33]), [1, 3, 9, 27, 33, 57, 58, 100])
	t.end()
})