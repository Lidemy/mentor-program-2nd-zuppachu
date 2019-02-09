<?php
	require_once('./conn2.php');
	$id = $_GET['id'];
	$sql = "UPDATE articles2 SET post_status='draft' WHERE id=" . $id;

	if($conn->query($sql)) {
		header("Location:./admin2.php");
	} else {
		die("failed." . $conn->error);
	}


?>