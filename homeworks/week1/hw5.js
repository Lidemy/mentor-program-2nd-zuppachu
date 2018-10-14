//這題不可用 內建函式： repeat and join

function join(arr, concatStr) {
	var result = ''
	for (var i=0; i<arr.length; i++) {
		if (i === arr.length-1) {
			result += arr[i]
		} else {
			result += arr[i] + concatStr //stricky here 因為最後結尾老師不要有！
		}	
	}
	return result

}
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))


//寫法二： aab/！！！bcc/！！！cce 
//(規則變成把第一個元素先列出來 再加 ！！！)

function join(arr, concatStr) {
	var result = arr[0]
	for(var i=1; i<arr.length; i++){
		result += concatStr + arr[i]  
	}
	return result
}

console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))

//寫法三

function join(arr, concatStr) {
	var result = ''
	for(var i=0; i<arr.length-1; i++){
		result += arr[i] + concatStr 
	}
	return result + arr[arr.length-1]
}
console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))



function repeat(str, times) {
	var result = ''
	for(var i=1; i<=times; i++){
		result += str
	}
	return result
}

console.log(repeat('a', 5))







/* 我的錯誤答案ＸＤ
var str =[] //這是要放外邊呀呀呀，放裡面錯誤！跑出空字串ＸＤ 老師說錯誤，沒有人放外邊的 
function join(str, concatStr) {

	return str.join(concatStr)
}

console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))

var str = ''
function repeat(str, times) {

	return str.repeat(times)
}

console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))
*/