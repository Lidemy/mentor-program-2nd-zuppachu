## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
先說資料表常用欄位型態好了：
1. int （integer） 整數數字
2. varchar(n) 字元
3. float 浮點數，含小數點
4. datetime  日期時間
5. bit 布林值（0 = false; 1= true)
6. text 大量文字

而 varchar 跟 text 差別為：

- varchar(n) 是字元，存 0 到 n 個，通常用於帳號代碼、帳號名稱、一串書碼。

- text 純文字，用於文章、留言板。



## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？

- what's cookie?
cookie 是一個小型的純文字檔案。

cookie 通常存在用戶的本機端，可存的地方有兩個：
1. 記憶體
2. 硬體內

記憶體是由瀏覽器來維護，通常會在瀏覽器關閉後清除。

- why do we need cookie?
因為 HTTP 世界裡面是個無狀態的情況，每個 request 都是一個新的 request，彼此都是獨立的，故互相不認識彼此。所以需要一個小檔案被 server 記錄下來，之後瀏覽器傳送 request 到 server 時，server 可以快速地檢視小檔案(像是小S 的小本本)
，看看有沒有什麼資料幫助辨識（小S 會檢查他的小本本有沒有此人的其他八卦）～ 

舉日常生活的例子：
當瀏覽網站時，cookie 會紀錄用戶資訊，例如：購物車、會員登入等資料。等下次再瀏覽同個網站時，伺服器會先查看上次是否有留下的 cookie 資料，有的話會依據 cookie 內容判斷使用者，進而送出特定的網頁內容。

- how to run?
瀏覽器送一個 request 到 serve 端後，伺服器會回傳 HTTP response 給瀏覽器，這個 http response 的 header 裡面包含 cookie 小檔案，檔案內有很多資訊，如同前所述，其中包含者使用者的資料。


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？


