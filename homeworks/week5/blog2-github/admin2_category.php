<!--分類管理 主頁面-->

<?php require_once("./conn2.php"); ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Blog 部落格 分類管理 主頁</title>
	<link rel="stylesheet" type="text/css" href="./style2.css">
</head>
<body>
	<h1>分類管理</h1>
	<a href="./add2_category.php">新增分類</a>
	<a href="./admin2.php">管理文章</a>
	<ul>
		<?php
			$sql = "SELECT * FROM categories2 ORDER BY created_at DESC";
			$result = $conn->query($sql);
			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					echo "<li>";
					echo 	$row['name']; //抓標題
					echo 	" <a href='update2_category.php?id=$row[id]'>編輯</a>";
					echo  	" <a href='delete2_category.php?id=$row[id]'>刪除</a>";
					echo "</li>";
				}
			}
		?>
	</ul>

</body>
</html>