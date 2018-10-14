//給定一個字串，請輸出反轉之後的樣子（不能使用內建的 `reverse` 函式）


//方法一： for loop
function reverse(str) {

	var newString = ''

	for(var i=str.length-1; i>=0; i--) {

		newString += str[i]	//第 i 個的 string
	}

	return newString
}


console.log(reverse('1,2,3,2,1'))
console.log(reverse('1abc2'))
console.log(reverse('yoyoyo'))


//方法二： .reverse()

function reverse(str){

	var strSplit = str.split('')
	var arrRverse = strSplit.reverse()
	var arrJoin = arrRverse.join('')

	return arrJoin
}

console.log(reverse('1,2,3,2,1'))
console.log(reverse('1abc2'))
console.log(reverse('yoyoyo'))


//方法三： 方法二的簡化版

function reverse(str){
	return str.split('').reverse().join('')
}
console.log(reverse('1,2,3,2,1'))
console.log(reverse('1abc2'))
console.log(reverse('yoyoyo'))

















