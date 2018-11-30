/*

0. 抓 form 監控 sumbit 鈕

1. 判斷有沒有答題？

（那要怎麼判斷呢？）設一個 function check()，一題一題過目？
（要怎麼一題一題過目？）用 for loop 好了？

答題會遇到的狀況
a. 全部有寫 => 不顯紅底，只出現完整的資訊
b. 部分有寫 => 顯示沒寫題目的紅底 ＋ 必填文字
c. 沒有寫（值 = ''） => 顯示紅底 ＋ 必填文字
(bc 概念可以合併？)

2. 第三題單選題，單獨判斷

3. 確認所有必填答案完整 => 顯示出表單。
*/

debugger

document.addEventListener("DOMContentLoaded", function(){

	//抓 form 監控 submit 按鈕
	document.querySelector("form").addEventListener("submit", e => {

		let type1 = document.getElementById("type1")
		let type2 = document.getElementById("type2")
		let other = document.getElementById("ohter")
		// 抓必填題 
		let answer = document.querySelectorAll("input.required")


		// 設定迴圈掃必填題
		for(let i=0; i<5; i++){

			// 抓必填題
			//let answer = document.querySelectorAll("input.required")	

			//如果必填題目顯示空白的話：紅底出現 ＋ 顯示必填文字
			if(answer[i].value === "") {
				document.querySelectorAll(".reminder")[i].style.display = "block" //浮出『必填問題』提醒
				document.querySelectorAll(".form_content")[i].style.background = '#ffebee' //題目匡的背景顏色
				document.querySelectorAll("input")[i].style.background = '#ffebee' //輸入匡的背景顏色
				
				//設定輸入匡紅底線
				document.querySelectorAll(".required")[i].style.borderTop = 'none' 
				document.querySelectorAll(".required")[i].style.borderLeft = 'none'
				document.querySelectorAll(".required")[i].style.borderRight = 'none'
				document.querySelectorAll(".required")[i].style.borderBottom = '2px solid #ea3535'
				e.preventDefault()

			} else { //都填了話，印出答案
				//console.log(e) 原本用這個方法，需要多點好多次 alert 的確認鈕，很怪？
				alert('提交成功！')
				console.log(answer[0].value)
				console.log(answer[1].value)
				console.log('type1:'+ type1.checked)
				console.log('type2:'+ type2.checked)
				console.log(answer[3].value)
				console.log(answer[4].value)
			} 
		}
		
		// 確認單選題
		if(!type1.checked && !type2.checked){
			document.querySelector('.form_content3').style.background = "#ffebee"
			document.getElementById('reminder3').style.display = "block"
			e.preventDefault()

		} 
		else {
			document.getElementById('reminder3').style.background = "white"
			document.querySelector('.form_content3').style.display = "none"
		}


	})

})


