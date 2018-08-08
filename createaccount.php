<?php

$myData = $_POST['data'];

//Testing to see if i have data. Currently i don't and i'm not sure why
//echo "should be here: ".$myData;

$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}



$myDataArr = explode('|', $myData);

$email = mysqli_real_escape_string($db,$myDataArr[0]);
$password = mysqli_real_escape_string($db,$myDataArr[1]);
$is_admin = mysqli_real_escape_string($db,$myDataArr[2]);



//Sanitize Input
//$formtitle = mysqli_real_escape_string($db,$myDataArr[0]);

//trying to add the form title into the form table
$addTitleRow = "INSERT INTO user (email, password, is_admin) VALUES ('{$email}', '{$password}', '{$is_admin}')";
$firstResult = mysqli_query($db, $addTitleRow);

if($firstResult){
	echo "success";
}else{
	echo "failed";
}



?>