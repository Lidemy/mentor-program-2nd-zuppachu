<?php 
	require_once("./conn2.php");

	$title  = $_POST['title'];
	$content = $_POST['content'];
	$category_id = $_POST['category_id'];
	$id = $_POST['id'];

	if (empty($title) || empty($content) || empty($category_id)) {
		die('empty data');
	}

	//選擇資料庫
	$sql = "UPDATE articles2 SET title='$title', content='$content', category_id = '$category_id' WHERE id= " . $id;

	$result = $conn->query($sql);

	if($result) {
		header("Location: ./admin2.php");
	} else {
		die("failed." . $conn->error);
	}

?>