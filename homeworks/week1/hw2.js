//給定一字串，把第一個字轉成大寫之後回傳，若第一個字不是英文字母則忽略。

function swapFistLetter(str) {
	return str[0].toUpperCase()+ str.slice(1)
	//反正 .toUpperCae 會自動忽略符號＋加上大寫也轉成大寫，所以用這方法沒差。
}

console.log(swapFistLetter('nick'))
console.log(swapFistLetter('Nick'))
console.log(swapFistLetter(',hello'))
console.log(swapFistLetter('！！！！abchello'))

//老師解法
function capitalize(str) {
	//某些時候可用字串當陣列 str[0]
	var first = str[0].toUpperCase()
	return first + str.slice(1)
}
console.log(capitalize('nick'))

//簡短寫法
function capitalize(str) {
	
	return  str[0].toUpperCase() + str.slice(1)
	
}
console.log(capitalize('nick'))

//另一作法： 利用 .replace() 只會換第一個字元的特性
//week2 2-1 @16:47的部分 => str.replace('a','A')
function capitalize(str) {
	
	return  str.replace(str[0], str[0].toUpperCase())
}
console.log(capitalize('nick'))