function isPalindromes(str) {

	var ans = str.split("").reverse("").join("")
	if(ans === str) {
		return true
	} else {
		return false
	}
  
}


module.exports = isPalindromes