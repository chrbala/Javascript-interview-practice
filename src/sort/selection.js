export default a => {
	for (var i = 0; i < a.length; i++) {
		var smallestIndex = i

		for (var j = i + 1; j < a.length; j++)
			if (a[j] < a[smallestIndex])
				smallestIndex = j

		var temp = a[i]
		a[i] = a[smallestIndex]
		a[smallestIndex] = temp
	}

	return a
}