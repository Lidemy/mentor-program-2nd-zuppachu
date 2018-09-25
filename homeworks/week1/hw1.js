
//hw1：印出星星
//給定 n（1<=n<=30），依照規律印出正確圖形


function printStars(n) {

	if(n<=1 && n>=30) {
		return undefined
	}

	var ans = ''

	for(i=0; i<n; i++) {

		ans += '*'

	}

console.log(ans) 
}

printStars(50)





