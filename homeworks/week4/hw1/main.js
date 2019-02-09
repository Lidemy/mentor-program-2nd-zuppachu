
document.addEventListener('DOMContentLoaded', function(){

  let firstNum = ''
  let secondNum = ''
  let waitToOperation = ''

  //選所有按鈕，按下後會觸發 匿名函式
  document.querySelector('.btns').addEventListener('click',(e) => {

    //選定螢幕
    let result = document.querySelector('.screen');
    
    //如果選到 加 減 乘除 刪去 
    if(e.target.className === 'operation') {

      //第一個數字先顯示在螢幕上
      firstNum = result.innerText;

      //設定 加減乘除
      if(e.target.id === 'plus') {waitToOperation='+'}
      if(e.target.id === 'minus') {waitToOperation='-'}
      if(e.target.id === 'multiply') {waitToOperation='*'}
      if(e.target.id === 'divide') {waitToOperation='/'}

    }
      
    //按下 等於鍵
    if(e.target.id === 'equal'){

      //第二個數字顯示在螢幕上
      secondNum = result.innerText

      if(waitToOperation === '+'){result.innerText = parseFloat(Number(firstNum) + Number(secondNum))}
      if(waitToOperation === '-'){result.innerText = parseFloat(Number(firstNum) - Number(secondNum))}
      if(waitToOperation === '*'){result.innerText = parseFloat(Number(firstNum) * Number(secondNum))}
      if(waitToOperation === '/'){result.innerText = parseFloat(Number(firstNum) / Number(secondNum))}
    }

    //如果沒有任何 加 減 乘 除 的指令
    if(waitToOperation === ''){

      if(e.target.className === 'number') {
        
          if(result.innerText === '0'){
              result.innerText = e.target.innerText //選到0，顯示0
          } else {
              result.innerText += e.target.innerText
          }
      }
      //選到 小數點 和 不包含小數點 的情況
      if(e.target.id === 'point' && !result.innerText.includes('.')){
          result.innerText += e.target.innerText
      }

    } //如果有指令的情況下
    else if (waitToOperation !== '') {

        if(e.target.className === 'number') {

          if(result.innerText === firstNum){
              result.innerText = e.target.innerText
          }else{
              result.innerText += e.target.innerText
          }
        }
    }


    //不知道為什麼用 e.target.id === 'point' 顯示出 firstNum is not defined，但改成 querySelector 就可以了？
    if(document.querySelector('#point') === 'point'){
        if(result.innerText === firstNum){
            result.innerText = '0.'
        } else if(!result.innerText.includes('.')){
            result.innerText += e.target.innerText
        }

        /*
        不確定這樣理解正確嗎？
        如果選到 "." 
          => 第一個數會是 0.X
          => 不是的話，就是直接呈現所選的數字
        */
    } 

    //刪去
    if(e.target.id === 'cancle'){
      //window.location.reload();
      result.innerText = '' //發現用這個方法不會換頁比較快一丁點的感覺
    }


  })
  
})
