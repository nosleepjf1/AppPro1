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

<div>
<button type="button" style="margin: 10px 0px" class="btn btn-info" data-toggle="modal" data-target="#howToUse">Instructions for using this app</button>
</div>


<div class="modal" id="howToUse" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">How to use this app</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
    <p id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"> 1- Watch the tutorial video: </p>
    <p id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"> 2- Log in as the default administrator- <br> email: testadmin@gmail.com <br> password: testadmin </p>
    <p id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"> 3- Once you are logged in as an admin you can create your own administrators and users </p>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>




<!-- end testing area -->


<h2>Log In</h2>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <p class="validate" id="loginEmailVal"></p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    <p class="validate" id="loginPasswordVal"></p>
  </div>
  
  <button type="submit" class="btn btn-primary" ng-click= "myCtrl.Login()">Submit</button>
</form>
<div>
<br>
<h2>Or Create an account</h2><br>
<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#createAccountModal">Create an Account</button>
</div>

<div class="modal" id="createAccountModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create an Account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
    <label for="exampleInputEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email">
    <p class="validate" id="createAccountEmailVal"></p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
    <p class="validate" id="createAccountPasswordVal"></p>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" ng-click= "myCtrl.CreateAccount()">Create Account</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>




</div> <!-- end div for myctrl as vm -->
</body>
</html>
