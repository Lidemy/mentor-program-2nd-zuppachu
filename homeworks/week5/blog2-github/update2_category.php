<!--編輯分類-->

<?php
	require_once('./conn2.php');
	$id = $_GET['id'];
	$sql = "SELECT * FROM categories2 where id=" . $id;
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();	

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Blog 部落格</title>
	<link rel="stylesheet" type="text/css" href="./style2.css">
</head>
<body>
	<h1>編輯分類</h1>
	<form method="POST" action="./handle_update2_category.php">
		名稱：<input type="" name="name" value="<?php echo $row['name']?>" />
		<input type="hidden" name='id' value="<?php echo $row['id']?>" /> <!--原本沒寫這行-->

		<input type="submit" />
		
	</form>
</html>