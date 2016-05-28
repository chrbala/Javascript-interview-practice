import test from 'tape'

import binarySearch from './binarySearch'

test('binary search', t => {
	t.equal(binarySearch(3, [0, 1, 2, 3, 4, 5]), 3)
	t.equal(binarySearch(0, [0, 1, 2, 3, 4, 5]), 0)
	t.equal(binarySearch(5, [0, 1, 2, 3, 4, 5]), 5)
	t.equal(binarySearch(6, [0, 1, 2, 3, 4, 5]), -1)
	t.equal(binarySearch(555, [5, 100, 202, 555, 1097]), 3)
	t.end()
})