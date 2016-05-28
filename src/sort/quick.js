const swap = (arr, index1, index2) => {
	var temp = arr[index1]
	arr[index1] = arr[index2]
	arr[index2] = temp
}

const partition = (arr, left, right) => {
	var pivot = arr[Math.floor((left + right) / 2)]
	
	while (left <= right) {
		while (arr[left] < pivot) 
			left++
		while (arr[right] > pivot) 
			right--

		if (left <= right) {
			swap(arr, left, right)
			left++
			right--
		}
	}

	return left
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	var index = partition(arr, left, right)

	if (left < index - 1)
		quickSort(arr, left, index - 1)
	if (index < right)
		quickSort(arr, index, right)

	return arr
}

export default quickSort