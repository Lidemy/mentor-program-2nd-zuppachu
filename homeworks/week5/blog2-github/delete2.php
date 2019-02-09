<?php
	require_once("./conn2.php");
	$id = $_GET['id'];
	$sql = "DELETE FROM articles2 where id= " . $id;

	if ($conn->query($sql)) {
		header("Location: ./admin2.php");
	} else {
		die("failed." . $conn->error);
	}

?>