<!--編輯 文章-->

<?php 
	require_once("./conn2.php"); 
	//抓 資料庫內的 文章內容
	$id = $_GET['id'];
	$sql = "SELECT * FROM articles2 WHERE id =" . $id;
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();

	//抓 資料庫內的 分類 
	$sql_category = "SELECT * FROM categories2 ORDER BY created_at DESC";
	$result_category = $conn->query($sql_category);
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
 	<title>Blog 後台管理 編輯文章</title>
 	<link rel="stylesheet" type="text/css" href="./style2.css">
</head>
<body>
	<h1>編輯文章</h1>
	<form method="POST" action="handle_update2.php">
		<div>標題:<input name="title" value="<?php echo $row['title']?>" /></div> 
		<div>內容:<textarea name="content" rows='25'><?php echo $row['content']?></textarea></div>
		<div>
			分類:<select name='category_id'>
				<?php 
					//抓資料庫內的 分類
					while ($row_category = $result_category->fetch_assoc()) {
						$id = $row_category['id'];
						$name = $row_category['name'];
						$is_checked = $row['category_id'] === $id ? "selected" : ""; 
						echo "<option value = '$id' $is_checked>$name</option>";
					}
				?>
			</select>
		</div>
		<input type="hidden" name="id" value="<?php echo $row['id']; ?>"/>
		<input type="submit" />
	</form>
	

</body>
</html>