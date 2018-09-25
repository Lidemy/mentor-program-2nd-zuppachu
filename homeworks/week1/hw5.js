
var str =[] //這是要放外邊呀呀呀，放裡面錯誤！跑出空字串ＸＤ
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
