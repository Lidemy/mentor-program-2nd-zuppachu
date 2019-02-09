<!--後台 管理 主頁-->

<?php require_once("./conn2.php"); ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<title>Blog 後台管理 主頁</title>
 	<link rel="stylesheet" type="text/css" href="./style2.css">
 </head>
 <body>
 	<h1>文章管理</h1>
 	<a href="./add2.php">新增文章</a>
 	<a href="./admin2_category.php">管理分類</a>

 	<ul>
 		<?php
 			$sql= "SELECT * FROM articles2 ORDER BY created_at DESC";
 			$result = $conn->query($sql);
 			if ($result->num_rows > 0) {
 				while ($row = $result->fetch_assoc()) {
 					echo "<li>";
 					echo 	$row['title']; //抓標題
 					echo 	" <a href='update2.php?id=$row[id]'>編輯</a>";
 					echo 	" <a href='delete2.php?id=$row[id]'>刪除</a>";
 					echo  	" <a href='inactive2.php?id=$row[id]'>草稿</a>";
 					echo  	" <a href='active2.php?id=$row[id]'>發佈</a>";
 					echo "</li>";
 				}
 			} 
 		?>
 	</ul>
 </body>
 </html>