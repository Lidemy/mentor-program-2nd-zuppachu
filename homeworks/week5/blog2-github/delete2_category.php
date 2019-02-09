<?php
	require_once("./conn2.php");

	$id = $_GET['id'];
	$sql = "DELETE FROM categories2 where id=" . $id;
	
	if($conn->query($sql)) {
		header("Location: ./admin2_category.php");
	} else {
		die("failed." . $conn->error);
	};

?>