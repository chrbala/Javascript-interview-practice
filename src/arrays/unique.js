// Question 1.1
export const uniqueWithNoDataStructures = str => {
	for (var i = 0; i < str.length; i++)
		for (var j = i + 1; j < str.length; j++)
			if (str[j] == str[i])
				return false

	return true
}

export default str => {
	var chars = {}
	for (var char in str)
		if (!chars[str[char]])
			chars[str[char]] = true
		else
			return false

	return true			
}