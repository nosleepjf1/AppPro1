          
function validate(id, email, password)
{  
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var regTest = reg.test(email);
  var myReturnStatement = true;
  
  if(email.length <= 1)
  {
    $("#" + id + "EmailVal").html("Please enter your email.");
    myReturnStatement = false;
  }
          
  else if (regTest == false)
  {
    $("#" + id + "EmailVal").html("Please enter a valid email.");
    myReturnStatement = false;
  }
  else
  {
    $("#" + id + "EmailVal").html("");
  } 
          
  if(password.length <= 1)
  {
    $("#" + id + "PasswordVal").html("Please enter a password.");
    return false;
  }
  else if(password.length <= 5)
  {
    $("#" + id + "PasswordVal").html("Password must be at least 6 characters long.");
    return false;
  }
  else
  {
    $("#" + id + "PasswordVal").html("");
  } 
  
  if(!myReturnStatement)
  {
    return false;
  } 
  return true;
} 