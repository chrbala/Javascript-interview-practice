export default (target, arr) => {
	var min = 0
	var max = arr.length - 1
	var mid

	while (min <= max) {
		mid = Math.floor((min + max) / 2)

		if (target > arr[mid])
			min = mid + 1
		else if (target < arr[mid])
			max = mid - 1
		else
			return mid
	}

	return -1
}