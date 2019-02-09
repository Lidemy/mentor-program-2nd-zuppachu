<?php 
	require_once("./conn2.php"); 

	$id = $_GET['id'];
	$sql = "SELECT A.id, A.title, A.content, categories2.name FROM articles2 as A LEFT JOIN categories2 on A.category_id WHERE A.id =" .$id;
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();

	$title = $row['title'];
	$content = $row['content'];
	$name = $row['name'];

?>

<!DOCTYPE html>
<html>
<head>
	<title>BLOG 部落格 單篇文章</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="./style2.css">
</head>
<body>
	<nav class="navbar">
		<ul>
			<li><a href="./index2.php" class="home">HOME</a></li>
			<li><a href="./index2.php">BLOG</a></li>
			<li><a href="./about2.php">ABOUT</a></li>
		</ul>
	</nav>
	<div class="pic">
		<img src="https://images.unsplash.com/photo-1504715768316-ac387331ee6e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=zelda-gardner-365979-unsplash.jpg"> 
	</div>

	<div class="container">

		<div class="articles">
			<div class="single-article">
				<h1><?php echo $title; ?></h1>
				<h3>分類：<?php echo $name; ?></h3>
				<p class="page">
					<?php echo $content; ?>
				</p>
		</div>
	</div>

	<footer> made by @ Zuppachu</footer>
</body>
</html>