const merge = (a, helper, low, middle, high) => {
	for (let i = low; i <= high; i++)
		helper[i] = a[i]

	var helperLeft = low
	var helperRight = middle + 1
	var current = low

	while (helperLeft <= middle && helperRight <= high) {
		if (helper[helperLeft] <= helper[helperRight]) {
			a[current] = helper[helperLeft]
			helperLeft++
		} else {
			a[current] = helper[helperRight]
			helperRight++
		}

		current++
	}

	var remaining = middle - helperLeft
	for (let i = 0; i <= remaining; i++)
		a[current + i] = helper[helperLeft + i]
}

const mergeSort = (a, helper = {}, low = 0, high = a.length - 1) => {
	if (low >= high)
		return a

	var middle = Math.floor((low + high) / 2)
	mergeSort(a, helper, low, middle)
	mergeSort(a, helper, middle + 1, high)
	merge(a, helper, low, middle, high)

	return a
}

export default mergeSort