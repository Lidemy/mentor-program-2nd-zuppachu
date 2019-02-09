<!--實作 編輯分類-->

<?php 
	require_once("./conn2.php");

	$name = $_POST['name'];
	$id = $_POST['id'];

	if(empty($name) || empty($id)) {
		die('empty data.');
	} 

	$sql = "UPDATE categories2 SET name = '$name' WHERE id = ". $id;
	$result = $conn->query($sql);

	if($result) {
		header("Location: ./admin2_category.php");
	} else {
		die("failed." . $conn->error);
	}

?>