//方法二
function alphaSwap(str){
	return str.split('').map(function(c){
		if(c >= 'A' && c <= 'Z') {
			return c.toLowerCase()
		}
		return c.toUpperCase()
	}).join('')
}

/*
方法一：
function alphaSwap(str) {

	var result = ''

	for (var i=0; i<str.length; i++){
		if(str[i] >= 'A' && str[i] <= 'Z'){
			result += str[i].toLowerCase()
		} else if (str[i] >= 'a' && str[i] <= 'z'){
			result += str[i].toUpperCase()
		} else {
			result += str[i]
		}

	}
	return result
}
console.log(alphaSwap('nICk'))
*/


module.exports = alphaSwap