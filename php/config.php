<?php

	// database constants
	define("DB_USER","507759");
	define("DB_PASS","asdfjkl1");
	define("DB_HOST","localhost");
	define("DB_NAME","507759");

	$link = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die('Could not connect to mysql server.');
	mysql_select_db(DB_NAME) or die('Could not find database ' . DB_NAME);
	
	// ensure $_SESSION exists
    session_start();
	
?>
