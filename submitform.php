<?php
$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}

$formId = ($_POST['formId']);

$sqlStatement2 = "SELECT * FROM form_input2 WHERE form_id = $formId";
$result2 = mysqli_query($db, $sqlStatement2);
$numrows2 = mysqli_num_rows($result2);

for ($j = 0; $j < $numrows2; $j++)
{
  $row2 = mysqli_fetch_array($result2);
  $title2 = $row2['title'];
  $description2 = $row2['description'];
  $options2 = $row2['options'];
  $input_type = $row2['input_type'];
  
}

//This query is used to grab the input_id and input_type to be used later
$sqlStatement3 = "SELECT id, input_type FROM form_input2 WHERE form_id = $formId";
$result3 = mysqli_query($db, $sqlStatement3);
$numrows3 = mysqli_num_rows($result3);


//echo 'text: ';
//echo ($_POST['text']);
print_r($_POST);
$count = count($_POST);
//echo "anything? ";
//echo ($_POST['makedropdownwork1']);
for($k = 0; $k < $count; $k++)
{
//in the 3 lines below I reference the query from line 26 so that I can save each piece of data into variables and then insert them into the database below
$row3 = mysqli_fetch_array($result3);
$id3 = $row3['id'];
$input_type3 = $row3['input_type'];

$textvar = "text"."$k";
$numbervar = "number"."$k";
$dropdownvar = "makedropdownwork"."$k";
$checklistvar = "checkbox"."$k";
if($_POST[$textvar] != "")
  {
  echo ($_POST[$textvar]);
  echo "*";
  $addRowData = "INSERT INTO form_data (data, form_id, input_id, input_type) VALUES ('{$_POST[$textvar]}', '{$formId}', '{$id3}', '{$input_type3}')";
  $result = mysqli_query($db, $addRowData);
  }
if($_POST[$numbervar] != "")
  {
  echo ($_POST[$numbervar]);
  echo "*";
  $addRowData = "INSERT INTO form_data (data, form_id, input_id, input_type) VALUES ('{$_POST[$numbervar]}', '{$formId}', '{$id3}', '{$input_type3}')";
  $result = mysqli_query($db, $addRowData);
  }
if($_POST[$dropdownvar] != "")
  {
  echo ($_POST[$dropdownvar]);
  echo "*";
  $addRowData = "INSERT INTO form_data (data, form_id, input_id, input_type) VALUES ('{$_POST[$dropdownvar]}', '{$formId}', '{$id3}', '{$input_type3}')";
  $result = mysqli_query($db, $addRowData);
  }
if($_POST[$checklistvar] != "")
  {
  
  foreach ($_POST[$checklistvar] as $checkboxitem)
    {
    echo "*";
    echo $checkboxitem;
    $addRowData = "INSERT INTO form_data (data, form_id, input_id, input_type) VALUES ('{$checkboxitem}', '{$formId}', '{$id3}', '{$input_type3}')";
    $result = mysqli_query($db, $addRowData);
    } 
  } 

}
echo "image files: ";
print_r($_FILES['image']);

//testing area 

$total = count($_FILES['image']['name']);
for ( $i=0 ; $i < $total ; $i++)
{
//testing area
if(isset($_FILES['image']))
{
$sqlStatement4 = "SELECT id, input_type FROM form_input2 WHERE input_type = 'file'";
$result4 = mysqli_query($db, $sqlStatement4);
$numrows4 = mysqli_num_rows($result4);
$row4 = mysqli_fetch_array($result4);
$id4 = $row4['id'];
$input_type4 = $row4['input_type'];


  $error = arraY();
  $file_name = $_FILES['image']['name'][$i];
  $file_size = $_FILES['image']['size'][$i];
  $file_tmp = $_FILES['image']['tmp_name'][$i];
  $file_type = $_FILES['image']['type'][$i];
  
  
  $file_ext = strtolower(end(explode('.', $_FILES['image']['name'][$i])));
  $extensions = array("jpeg", "jpg", "png");
  
  if(in_array($file_ext, $extensions) == false)
  {
    $error[] = "Please choose an image of type: JPG, JPEG, or PNG";
  }
  if(empty($error) == true)
  {
    move_uploaded_file($file_tmp, "uploads/" . $file_name);
    $path = $_SERVER['HTTP_REFERER']."uploads/"."$file_name";
    echo "$path";
  }
$addRow = "INSERT INTO form_image (image, form_id, input_id) VALUES ('{$path}', '{$formId}', '{$id4}')";
$result = mysqli_query($db, $addRow);
} //end forloop testing!!!
  

}

//the 12 rows below are inserting image paths to the database and then displaying them.
//TODO update the database to hold all the information it will need to hold
//1- id
//2- input_id //keeping track of this will help to connect the data to the right input, in case edits are made or the data appears out of order
//3- form_id //not sure this is necessary here because i can find it through input_id, but it is convenient
//3- user_id  Must create the user table before this will work
//4- submission_number  Each time a form is submitted i add 1 to this. This way i can keep track of which data goes with which submission
//4- input type - storing this so that i can parse according to this type
//5- data
//6- date

//user - jonny
//select data,input_type from form_data where user_id = jonny and form_id = 1;



$sqltest = "SELECT * FROM form_image";
$results = mysqli_query($db, $sqltest);
$numrowstest = mysqli_num_rows($results);
for ($j = 0; $j < $numrowstest; $j++)
{
$rowtest = mysqli_fetch_array($results);
$image = $rowtest['image'];
echo "<img src='";
echo "$image";
echo "'width='200px' height='200px'>";
}



?>