## hw5：簡答題

1. 什麼是 DOM？
DOM = 文物物件模組(Document Object Model)
它是專門用來與網頁溝通互動的橋樑，例如 javascript 可以透過 DOM 操控 HTML。

再細分的話：

- Document 即代表網頁
- Object 則是 HTML 裡面的元素，例如：<body> <head> <p> 等等。
- 最後 Module 模組，則是一整個 HTML 從上到下所包含的內容，可見下圖：

       __ head __ title 
HTML - |
       |__ body __ div __ p



2. 什麼是 Ajax？

Ajax 全名是 Asynchronous JavaScript and XML。

Ajax 可透過瀏覽器提供的 API(Application Programming Interface 應用程式介面：為程式與程式之間的橋樑。)，讓網頁無需等待 response 的回傳，也能執行後續的程式碼。因此透過 Ajax 技術，網頁不用等待網頁全部重新整下載（a.k.a 換頁）。待 response 回傳後，則繼續執行 response 給的回應。

那為什麼可以不用等待 response 的回傳就可以繼續執行後續的程式碼呢？ 

因為透過 callback function，讓資料傳遞的過程更省時。Ajax 就像是我們在美食街的呼叫器，當點好餐點後，會拿到一個呼叫器（callback function），之後就可以做其他事無須苦苦站在窗口等待食物（執行後續的程式碼，不用等待重新整理），等呼叫器響起，就可以拿餐（執行回傳後的資訊）。


3. HTTP method 有哪幾個？有什麼不一樣？

最常見的有 `get` 和 `post`。

- `get`：拿資料（買包包時，取得新型錄，了解包包的款式和 規格)

- `post`：傳送資料到伺服器/新增（呼叫店員幫忙找尋款式，買一新包）


再來是：

- `patch`： 更改部分資料 (結帳後想要加購配件或是更換包款
顏色)

- `delete` ： 如名字刪除用 (跟店員說不要買了！嗯...是個奧客～)

- `put` ： 把整個資料都換新 （換買一個不同款式的新包）

- `options`： 看伺服器支援哪些 method （查看店家有哪幾種包款可賣）

- `head`： 跟 `get`相似，差別在於 `head` 的 response 沒有 `body`


而`get` 和 `post`的差別寫於題四。



4. `GET` 跟 `POST` 有哪些區別，可以試著舉幾個例子嗎？

寫法格式：
```
<form method='GET or POST' action=''>
  // 內容物
</form>
```

`get` : 
- 從伺服器端拿資料，要求資料。

- 透過 URL 將參數送到伺服器那邊，因為是加載於 URL 後，所以參數長度會根據瀏覽器不同而有所限制。

- `get`是把資料放在`<header>`內進行傳送，所以可以在網址列上看見資訊，並且會被記儲存於歷史紀錄中，故不適合傳送重要資料，例如密碼。


`post` : 
- 從客戶端送資料過去伺服器

- `post`是透過 HTTP 發送，就是把資料放在訊息主體（message body）內傳送，而 `post`的請求不會被存放到歷史紀錄中，也不會出現於網址上，並且對於資料的長度沒有限制，所以相較於`get`，`post`的請求更安全、更適合傳遞隱密性高的資料，如：密碼、登入帳號等。

查資料時看到一種比喻方式，覺得滿好理解的，就借花獻佛一下唄！

我們可以把 `get` 想成是明信片。所有的內容都可以被郵局人員看見，所以私密心事（如：密碼）最好不要寫在上面，以免被看光光。再者，明信片因為書寫空間不夠大，所以可寫的內容長度被限制。

而 `post` 就是被信封套和信件，內容無限幅度，看你想寫幾張就幾張（message body），要寫多張、要貼照片都可（資訊種類無限制）！重點是因為有資訊內容可以放在信封套裡面，所以相較明信片，更具隱密性，雖然硬打開還是看得到內容啦。


5. 什麼是 RESTful API？

＝ RESTful service 
= Representational State Transfer

為一種網頁架構風格，並非是一種標準。

主要是在資源的操作上，用他人易懂的方式寫，且充分地運用 HTTP protocol verbs (如： POST/GET/DELET/PUT...等)。只要是利用這種風格寫法的 API 即稱為： RESTful API。


6. JSON 是什麼？

為一種以純文字為底來儲存和傳送簡單結構的資料。可以透過特定形式存任何資料，如：字串、數字、陣列、物件，但同時也可透過物件和陣列傳送較複雜的資料。

最常應用在網頁從 server 端傳送資料給瀏覽器的時候，透過 Ajax 技術交換 JSON 資料。

舉例來說：

我在網頁上點選了一個產品， javascript 會利用 Ajax 技術將此產品的 id 傳到伺服器，伺服器將收到的 id，將此 id 的產品資料編譯成 JSON 資料格式，並回傳給瀏覽器，收到後 js 先解碼 JSON 格式，再將資料顯示於網頁上。

7. JSONP 是什麼？

= JSON with padding

JSONP 利用 `<script>` 跨領域的特性，拿取不同源的資料。他只能用 GET 的方式拿取，不能用 POST，因為要帶的參數必須附加在網址後面。 

8. 要如何存取跨網域的 API？

方法有兩種，一種如題目七，用 JSONP 拿取。

另一種則是 CORS: Cross-oringin HTTP request（跨來源資源共享），當請求來自於不同來源時，會建立一個跨來源 HTTP 請求。所以若想跨領域存取， server 必須在 response 的 header 裡面加上 Access-Control-Allow-Origin。當瀏覽器收到 response 的時候，會先檢查 request 方的來源是否有包含這串字，有的話，就可順利讓程式接收到 response。