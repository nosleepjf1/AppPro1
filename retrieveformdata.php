<?php
$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}

$formId = ($_POST['data']);
//print $formId;
//print_r($_POST);


//run a query to get all submission id's with the same formid
$sqlStatement = "SELECT submission_id FROM form_data WHERE form_id = $formId";
$result = mysqli_query($db, $sqlStatement);
$numrows = mysqli_num_rows($result);
$submissions = array();
$submissionsArrayToString = "";
//adding all submission id's in this query to the $submissions array
for ($i = 0; $i < $numrows; $i++)
{
$row = mysqli_fetch_array($result);
$sub = $row['submission_id'];
//using in_array to make sure that i don't have duplicate submission id's in the $submissions array
if (in_array($sub, $submissions))
  {
  //echo "Match found";
  }
else
  {
   array_push($submissions, $sub);
   $submissionsArrayToString .= $sub;
   if($i < ($numrows - 2))
       {
         $submissionsArrayToString .= "|";
       }
  }
}
print($submissionsArrayToString);

if($_COOKIE["arrayPosition"])
{
  $arrayPosition = $_COOKIE["arrayPosition"];
}
else
{
  $arrayPosition = 0;
}

$sqlStatement2 = "SELECT * FROM form_data WHERE form_id = $formId AND submission_id = $submissions[$arrayPosition]";
$result2 = mysqli_query($db, $sqlStatement2);
$numrows2 = mysqli_num_rows($result2);
$returnData = '-';
for ($j = 0; $j < $numrows2; $j++)
{
  $row2 = mysqli_fetch_array($result2);
  $title2 = $row2['title'];
  $description2 = $row2['data'];
  $options2 = $row2['options'];
  $input_type = $row2['input_type'];
  $returnData .= $description2;
  $returnData .= "*".$input_type;
  if($j < ($numrows2 - 1))
    {
      $returnData .= "|";
    }
}



//testing area


$sqlStatement3 = "SELECT * FROM form_image WHERE form_id = $formId AND submission_id = $submissions[$arrayPosition]";
$result3 = mysqli_query($db, $sqlStatement3);
$numrows3 = mysqli_num_rows($result3);
//$returnData = '-';
for ($j = 0; $j < $numrows3; $j++)
{
  $row3 = mysqli_fetch_array($result3);

  $description3 = $row3['image'];
  $returnData .= "|".$description3."*file";
  if($j < ($numrows3 - 1))
    {
      $returnData .= "|";
    }
}


print $_COOKIE["arrayPosition"];

//end testing area
print $returnData;



?>