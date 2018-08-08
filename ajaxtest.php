<?php

$myData = $_POST['data'];

//Testing to see if i have data. Currently i don't and i'm not sure why
//echo "should be here: ".$myData;

$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}







//parse the data into different variables
//list($formtitle, $title, $description, $input_type, $options) = explode('|', $myData);

$myDataArr = explode('|', $myData);

//Sanitize Input
$formtitle = mysqli_real_escape_string($db,$myDataArr[0]);
$title= mysqli_real_escape_string($db,$myDataArr[1]);
$description = mysqli_real_escape_string($db,$myDataArr[2]); 
$input_type = mysqli_real_escape_string($db,$myDataArr[3]);
$options = mysqli_real_escape_string($db, isset($myDataArr[4]) ? $myDataArr[4] : "");


/*
This is where I used to add the form title to the form table. Now I do that in the saveformtitle.php file

$addTitleRow = "INSERT INTO form (title) VALUES ('{$formtitle}')";
$firstResult = mysqli_query($db, $addTitleRow);

if($firstResult){
	echo "success on first result";
}else{
	echo "failed on first result";
}
*/

//first get the id of the form so i can include it as the foreign key
$newID = "SELECT MAX(id) AS max_id FROM form";
$getNewId = mysqli_query($db, $newID);

if($getNewId){
	$getNewId = mysqli_fetch_assoc($getNewId)['max_id'];
}else{
	die("Query did not run");
}



//adding the form data into the form_input2
$addRow = "INSERT INTO form_input2 (form_id, title, description, input_type, options) VALUES ($getNewId, '{$title}', '{$description}', '{$input_type}', '{$options}')";

//run a query with mysqli_query(variable storing the database you connected to, sql statement)
$result = mysqli_query($db, $addRow);

if($result){
	echo "success";
}else{
	echo "failed";
}







?>