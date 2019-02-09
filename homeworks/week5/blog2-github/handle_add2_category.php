<!--實作 新增 分類-->

<?php 

	require_once('./conn2.php');

	$name = $_POST['name'];

	if (empty($name)) {
		die('empty data');
	};

	$sql = "INSERT INTO categories2(name) VALUES('$name')";
	$result = $conn->query($sql);
	if($result) {
		header("Location: ./admin2_category.php");
	} else {
		die('failed' . $conn->error);
	}


?>

