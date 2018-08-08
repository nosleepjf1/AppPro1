<?php

$myData = $_POST['data'];



$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}



$myDataArr = explode('|', $myData);

//Sanitize Input
$email = mysqli_real_escape_string($db,$myDataArr[0]);
$password = mysqli_real_escape_string($db,$myDataArr[1]);

//$string = str_replace(' ', '', $string);
//echo "email: ";
//echo $email;

$checkEmail = "SELECT * FROM user WHERE email = '$email'";
$getEmail = mysqli_query($db, $checkEmail);



  $row = mysqli_fetch_array($getEmail);
  $db_id = $row['id'];
  $db_email = $row['email'];
  $db_password = $row['password'];
  $db_is_admin = $row['is_admin'];
//print "database password is: ";
//print "$db_password";



//first, check that the query worked
if($getEmail)
{
  //if query worked, check if the email is in the database
  if($db_email == $email)
  {
      //if email exists in database, check to see if they are an admin or not so that I can later send them to the right page
      if($db_password == $password)
      {
        if($db_is_admin == 1)
        {
          echo "success-admin";
        }
        else if ($db_is_admin == 0)
        {
          echo "success-user";
        }
	    
	  }
	  else
	  {
	    echo "Your password is incorrect";
	  }
  }
  else
  {
    echo "We could not find your email in the database.";
  }	  
}
else
{
	echo "Error, query did not work.";
}



?>