<!--新增 文章-->

<?php 
	require_once("./conn2.php"); 
	$sql = "SELECT * FROM categories2 ORDER BY created_at DESC";
	$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
 	<title>Blog 後台管理 新增文章</title>
 	<link rel="stylesheet" type="text/css" href="./style2.css">
</head>
<body>
	<h1>新增文章</h1>
	<form method="POST" action="handle_add2.php">
		<div>標題:<input name="title" /></div>
		<div>內容:<textarea name="content" rows='25'></textarea></div>
		<div>
			分類:<select name='category_id'>
				<?php 
					//抓資料庫內的 分類
					while ($row = $result->fetch_assoc()) {
						$id = $row['id'];
						$name = $row['name'];
						echo "<option value = '$id'>$name</option>";
					}
				?>
			</select>
		</div>

		<input type="submit">
	</form>
	

</body>
</html>