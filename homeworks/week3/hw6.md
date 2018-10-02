## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. <br> break 換行
2. <hr> 水平線
3. <img src="XXX.jpg"> 插入圖片


## 請問什麼是盒模型（box model）

box model 為網頁排版前的基礎，了解其結構，可幫助我們設計網頁擺放位置。

在網頁上的每個元素，皆可視為一個小盒子(box)，每個小盒子從內往外由：內容 content、內距 padding、邊界 border、外距 margin 組合而成。 

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. inline：可以與其他元素並排，成同一行。無法設定寬高與上下。

2. block： 佔滿一整行的寬度，很自私無法與其他元素並排，可以設寬高度。

3. inline-block：可以與其他元素並排（同 inline），可以設定寬高與上下。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. static：
	為預設值。
	按照瀏覽器的預設自動排列，無法調整偏移（不受上下左右值的影響）。


//以下為可定位元素

2. relative：
	相對定位。
	相對於原本參考點做定位，可以調整上下左右讓其偏移，但不會影響到其他元素所在的位置。

3. absolute：
	絕對定位。
	與fixed很像，但是它主要依靠的點是：上一層且『非設定為stastic』的點。如果上一層沒有特別設定任何定位的話，position basolute會以網頁上的<body>為主要依靠點。

4. fixed：
	固定定位。
	固定在視窗中的某個位置，不隨滾動而消失。像現在很多網頁都有一個messenger聯繫圖案在視窗右下角。

