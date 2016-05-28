import test from 'tape'

import unique, { uniqueWithNoDataStructures } from './unique'

const check = (type, method) => test(type, t => {
	t.equal(method('aa'), false)
	t.equal(method('hello'), false)
	t.equal(method('pigs'), true)
	t.equal(method(''), true)
	t.end()
})

check('unique', unique)
check('unique with no additional data structures', uniqueWithNoDataStructures)