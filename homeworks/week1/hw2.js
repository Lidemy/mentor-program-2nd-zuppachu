//給定一字串，把第一個字轉成大寫之後回傳，若第一個字不是英文字母則忽略。

function swapFistLetter(str) {
	return str[0].toUpperCase()+ str.slice(1)
	//反正 .toUpperCae 會自動忽略符號＋加上大寫也轉成大寫，所以用這方法沒差。
}

console.log(swapFistLetter('nick'))
console.log(swapFistLetter('Nick'))
console.log(swapFistLetter(',hello'))
console.log(swapFistLetter('！！！！abchello'))



