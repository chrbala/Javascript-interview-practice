// Question 4.3
import BST from './BST'

var organizeData = Symbol('organizeData')

export default class CreateBST extends BST {
	static [organizeData](a, start = 0, end = a.length - 1) {
		var create = CreateBST[organizeData]

		if (end < start)
			return null

		var mid = Math.floor((start + end) / 2)
		return {
			data: a[mid],
			left: create(a, start, mid - 1),
			right: create(a, mid + 1, end)
		}
	}

	static createFromSortedArray(arr) {
		var data = CreateBST[organizeData](arr)
		return CreateBST.of(data)
	}
}