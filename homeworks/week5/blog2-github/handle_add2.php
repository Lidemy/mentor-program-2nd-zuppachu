<!--實作 新增文章（add2.php）-->

<?php 
//取得表單內容
require_once("./conn2.php");

$title = $_POST['title'];
$content = $_POST['content'];
$category_id = $_POST['category_id'];

//檢查資料
if (empty($title) || empty($content) || empty($category_id)) {
	die('請檢查資料');
}

//選擇資料庫
$sql = "INSERT INTO articles2 (title, content, category_id) VALUES ('$title', '$content', $category_id)";

$result = $conn->query($sql);

if ($result) {
	header ('Location: ./admin2.php');
} else {
	die("failed." . $conn->error);
};


?>