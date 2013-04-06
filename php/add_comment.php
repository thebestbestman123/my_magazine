<?php
	require("config.php");
	
	$name = mysql_real_escape_string($_POST["name"]);
	$comment = mysql_real_escape_string($_POST["comment"]);
	
	$sql = sprintf("INSERT INTO comments (id, name, comment, timestamp) VALUES (null, '%s', '%s', null)", $name, $comment);
	$result = mysql_query($sql);
	$id = mysql_insert_id();
	$array = array();
	$array["id"] = $id;
	echo json_encode($array);
?>