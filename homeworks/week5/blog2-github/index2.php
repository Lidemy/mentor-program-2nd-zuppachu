<?php require_once("./conn2.php")?>

<!DOCTYPE html>
<html>
<head>
	<title>BLOG 前台 主頁</title>
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
				<?php 
					//$sql = "SELECT * FROM articles2 ORDER BY created_at DESC"; (沒有草稿鍵時)
					$sql= "SELECT * FROM articles2 Where post_status='publish' ORDER BY created_at DESC";
					$result = $conn->query($sql);
					if ($result->num_rows>0) {
						while($row = $result->fetch_assoc()) {
							$id = $row['id'];
							$title = $row['title'];
							$content = $row['content'];
							echo "<div class='article'>";
							echo 	"<div class='title'><a href='article2.php?id=$id'>$title</a></div>";
							echo 	"<p class='content'>$content</p>";
							echo "</div>";
						};
					};
				?>
			</div>
			<footer> made by @ Zuppachu</footer>
		</div>

</body>
</html>