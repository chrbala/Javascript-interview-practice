export default a => {
	for (var i = 0; i < a.length; i++)
		for (var j = i + 1; j < a.length; j++)
			if (a[j] < a[i]) {
				var temp = a[i]
				a[i] = a[j]
				a[j] = temp
			}

	return a
}