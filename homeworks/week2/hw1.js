/*
方法一：
function stars(n) {
	
	var result = []

	var ans = ''
	
	for(var i=1; i<=n; i++){
		ans += '*'
		//console.log(ans)
		result.push(ans)
	}

	return result	
}
*/

//方法二：
function stars(n) {

	var result = ['*']

	for(var i=2; i<=n; i++){ 

		result.push('*'.repeat(i))

	}
	return result
}

module.exports = stars;
