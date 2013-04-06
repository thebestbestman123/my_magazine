<?php
	require("config.php");
	
	$sql = sprintf("SELECT * FROM comments ORDER BY timestamp ASC");
	$result = mysql_query($sql);
	
	$array = array();
	
	while($row = mysql_fetch_array($result))
	{
		$rowarray = array();
		$rowarray["id"] = $row["comment_id"];
		$rowarray["name"] = $row["commenter"];
		$rowarray["comment"] = $row["comment"];
		$array[] = $rowarray;
	}
	echo json_encode($array);
?>