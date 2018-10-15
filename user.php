<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
<link rel="stylesheet" href="style.css" type="text/css">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.9/angular.js"></script>
<script src="app.js"></script>
<script src="script.js"></script>
<script src="validate.js"></script>
</head>

<body ng-app="myApp">
<div class="container" ng-controller="myCtrl as myCtrl">

<!-- testing area -->
<div class="dropdown settingsDropdown">
  <button class="btn" style="font-size: 30px" type="button" id="settingsMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    &#9881;
  </button>
  <div class="dropdown-menu" aria-labelledby="settingsMenuButton">
    <a class="dropdown-item" href="#">still under development</a>
    <a class="dropdown-item" href="#">still under development</a>
    <a class="dropdown-item" href="#">still under development</a>
  </div>
</div>
<!-- testing area -->


<!-- Modal For New Form-->
<div id="newform" class="hidden">
<button type="button" id="buttontitle" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalNew">
  second modal
</button>
<div class="modal fade" id="exampleModalNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelNew" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabelNew">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       	<!-- Form Area -->
	<form class="newform"></form>
   
	<!-- End Form Area -->
	
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" ng-click= "myCtrl.CreateForm()">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>


<!-- testing area commented out just the button temporarily

<button type="button" class="btn btn-primary" ng-click = "myCtrl.FormName()" data-toggle="modal" data-target="#exampleModal">
  Create New Form
</button>
End testing area -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body formInProgress">
       <div class="dropdown">
  		<button class="btn btn-secondary dropdown-toggle form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    		Add a Field
  		</button>
 		 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   		 <a class="dropdown-item" ng-click= "myCtrl.FieldType('text')" href="#">Text</a>
   		 <a class="dropdown-item" ng-click= "myCtrl.FieldType('file')" href="#">File</a>
   		 <a class="dropdown-item" ng-click= "myCtrl.FieldType('dropdown')" href="#">Dropdown</a>
    	 <a class="dropdown-item" ng-click= "myCtrl.FieldType('number')" href="#">Number</a>
    	 <a class="dropdown-item" ng-click= "myCtrl.FieldType('checklist')" href="#">Checklist</a>
  </div>
</div>
	<!-- Form Area -->
	<form class="empty">
    </form>
    <button class='btn-primary hidden' id='submitForm' ng-click='myCtrl.CreateField()'>Add Field</button>
	<!-- End Form Area -->
	
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" ng-click= "myCtrl.CreateForm()">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div> <!-- end div for myctrl as vm -->
</body>




<?php
$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}
$sqlStatement = "SELECT * FROM form";

$result = mysqli_query($db, $sqlStatement);
if(!$result)
{
print "<p>no results</p>";
}
$numrows = mysqli_num_rows($result);
for ($i = 0; $i < $numrows; $i++)
{
$row = mysqli_fetch_array($result);
$title = $row['title'];
$formId = $row['id'];

//testing area

FormTitle($title, $i);



//testing area

//print "$title - $formId";
  
$sqlStatement2 = "SELECT * FROM form_input WHERE form_id = $formId";
$result2 = mysqli_query($db, $sqlStatement2);
$numrows2 = mysqli_num_rows($result2);
//print " $title has $numrows2 rows ";
  for ($j = 0; $j < $numrows2; $j++)
  {
  $row2 = mysqli_fetch_array($result2);
  $title2 = $row2['title'];
  $description2 = $row2['description'];
  $options2 = $row2['options'];
  $input_type = $row2['input_type'];
  //TODO -> work on FormContents so that I add the correct info into the forms
  FormContents($input_type, $title2, $description2, $options2, $j);
 // print "$title2 - $description2 - $input_type";
  }
 // print " <br> ";
 FormEnd($i, $formId);
}


/*
//this is a barebones example of how to connect to the database, run a query, and also return data.

//connecting to database. (server, username, password, database) username and password are optional
$db = mysqli_connect('localhost','','', 'test');

if (!$db)
{
print "<h1>Unable to connect to MYSQL</h1>";
}

//$sqlStatement = "INSERT INTO dog (breed, age) Values ('mutt', 3), ('boxer', 6)"; 

$sqlStatement = "SELECT * FROM dog";

//run a query with mysqli_query(variable storing the database you connected to, sql statement)
$result = mysqli_query($db, $sqlStatement);

if(!$result)
{
print "<p>no results</p>";
}

//use mysqli_num_rows to determine how many rows are in the returned query
$numrows = mysqli_num_rows($result);

print "number of rows is $numrows";

for ($i = 0; $i < $numrows; $i++)
{

//mysqli_fetch_array basically returns one row of data at a time from a query, so use this in a for loop
$row = mysqli_fetch_array($result);

//You still need isolate each column of data out of each row
$breed = $row['breed'];
$age = $row['age'];

print " $breed - $age ";

}

function writeMsg() {
    echo "Hello world test test test!";
}

*/



function FormTitle($title, $index)
{
echo '<div class="formStyle" id="newform';
echo "$index";
echo '">';
echo '<button type="button" id="buttontitle" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal';
echo "$index";
echo '">';
echo "$title";
echo '</button>';
echo '<div class="modal fade" id="exampleModal';
echo "$index";
echo '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">';
echo '<div class="modal-dialog" role="document">';
echo '<div class="modal-content">';
echo '<div class="modal-header">';
echo '<h5 class="modal-title" id="exampleModalLabel';
echo "$index";
echo '">';
echo "$title";
echo '</h5>';
echo '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
echo '<span aria-hidden="true">&times;</span>';
echo '</button>';
echo '</div>';
echo '<div class="modal-body">';
echo '<!-- Form Area -->';
echo '<form action="submitform.php" method="POST" enctype="multipart/form-data" class="newform" id="form';
echo "$index";
echo '">';
//echo '';
//echo '<!-- End Form Area -->';
//echo '';
//echo '</div>';
//echo '<div class="modal-footer">';
//echo '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
//echo '<button type="button" class="btn btn-primary" ng-click= "myCtrl.CreateForm()">Save changes</button>';
//echo '</div>';
//echo '</div>';
//echo '</div>';
//echo '</div>';
//echo '</div>';

}


function FormContents($input_type, $title, $description, $options, $j)
{
  if($input_type == "text")
  {
  echo "<label for='title'>";
  echo "$title";
  echo "</label>";
  echo "<input type='";
  echo "$input_type";
  echo "'name='text";
  echo "$j";
  echo "' class='form-control'>";
  echo "<small class='form-text text-muted'>";
  echo "$description";
  echo "</small>";
  }
  else if($input_type == "number")
  {
  echo "<label for='title'>";
  echo "$title";
  echo "</label>";
  echo "<input type='";
  echo "$input_type";
  echo "'name='number";
  echo "$j";
  echo "' class='form-control'>";
  echo "<small class='form-text text-muted'>";
  echo "$description";
  echo "</small>";
  }
  else if($input_type == "file")
  {
  echo "<label for='title'>";
  echo "$title";
  echo "</label>";
  echo "<input type='";
  echo "$input_type";
  //testing here
  echo "'name='image[]' class='form-control' multiple>";
  //testing here
  echo "<small class='form-text text-muted'>";
  echo "$description";
  echo "</small>";
  }
  else if($input_type == "checkbox")
  {
  //the 3 lines below display the title text
  echo "<label for='title'>";
  echo "$title";
  echo "</label>";
  
  //Testing area
  $optionArr = explode("-",$options);
  for($i = 0; $i < count($optionArr); $i++)
  {
    echo "<div class='checkbox'><label><input type='checkbox'";
    echo "name='checkbox";
    echo "$j"."[]";
    echo "'value='";
    echo "$optionArr[$i]";
    echo "'>";
    echo " $optionArr[$i]";
    echo "</label></div>";
  }
  //Testing area
  
  //the three lines below add the description text
  echo "<small class='form-text text-muted'>";
  echo "$description";
  echo "</small>";
  
  }
  
  else if($input_type == "dropdown")
  {
  //the 3 lines below display the title text
  echo "<label for='title'>";
  echo "$title";
  echo "</label>";
  //the line below begins the dropdown element
  echo "<div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton";
  echo "$j";
  echo "' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Select an Option</button><div class='dropdown-menu makedropdownwork";
  echo "$j";
  echo "' name='makedropdownwork";
  echo "$j";
  echo "' aria-labelledby='dropdownMenuButton";
  echo "$j";
  echo "'>";
  $optionArr = explode("-",$options);
  for($i = 0; $i < count($optionArr); $i++)
                {
                echo "<li class='dropdown-item' value='";
                echo "$optionArr[$i]";
                echo "'>";
                //insert each piece of option text here for the dropdown element
                echo "$optionArr[$i]";
                echo "</li>";
                }
  //the line below ends the dropdown now that it is filled
  echo "</div></div>";
  //the three lines below add the description text
  echo "<small class='form-text text-muted'>";
  echo "$description";
  echo "</small>";
  //the 3 lines below set up a hidden field that is part of the process of making the bootstrap dropdown work the way i need it to. 
  echo "<input type='hidden' name='makedropdownwork";
  echo "$j";
  echo "'>";
  }
}

function FormEnd($index, $formId)
{
echo '<input type="hidden" name="formId" value="';
echo "$formId";
echo '">';
echo '<!-- End Form Area -->';
echo '';
echo '</form>';
echo '';
echo '</div>';
echo '<div class="modal-footer">';
echo '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
echo '<button type="submit" form="form';
echo "$index";
echo '" value="Submit" class="btn btn-primary" ng-click= "myCtrl.CreateForm()">Save changes</button>';
// try this in the line above: onclick="event.preventDefault();document.getElementById('your-form').submit();"
echo '</div>';
echo '</div>';
echo '</div>';
echo '</div>';
echo '</div>';

}

?>







</html>
