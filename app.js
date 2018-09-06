(function(){

    angular.module("myApp", [])
        .controller("myCtrl", function ($http){
            var vm = this;
            vm.greet = 'Hi World!';
            vm.afterClick = "";
            vm.num = 4;
            vm.formName = "";
            vm.title = "";
            vm.typeOfField = "";
            vm.description = "";
            vm.input = "";
            vm.numOfOptions = 0;
            vm.formData = [];
            vm.myMessage = "Heeeeeeeyyyyy  World!";
            vm.XMLHttpRequestObject = false;
            vm.fileUsed = false;
            if (window.XMLHttpRequest)
            {
              vm.XMLHttpRequestObject = new XMLHttpRequest();
            } else if (window.ActiveXObject) 
            {
              vm.XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
            }
            vm.double = function(){
                return vm.num * 2;
            };
            vm.AngularButton = function(){
                vm.afterClick = "clicked";
            };
            
            vm.FormName = function()
            {
              vm.formName = prompt("Give your new form a title", "Travel Receipts");
              $(".modal-title").html(vm.formName);
              $("#buttontitle").html(vm.formName);
              //testing area
              
                 if(vm.XMLHttpRequestObject)
                {
                  vm.XMLHttpRequestObject.open("POST", "saveformtitle.php");
                  vm.XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  
                  vm.XMLHttpRequestObject.onreadystatechange = function()
                    {
                      if(vm.XMLHttpRequestObject.readyState == 4 && vm.XMLHttpRequestObject.status == 200)
                      {
                        var returnedData = vm.XMLHttpRequestObject.responseText;
                        console.log(returnedData);
                        if(returnedData == "success")
                        {
                   //!!!!!     alert("code ran successfully");
                        }
                        else
                        {
                   //!!!!!     alert("failed");
                        }
                        return false;
                      }
                    }
                    console.log("testing form name: " + vm.formName);
                  vm.XMLHttpRequestObject.send("data=" + vm.formName);
                }
              
              //testing area
            }
            vm.FieldType = function(typeOfField)
            {
              vm.typeOfField = typeOfField;
              console.log(typeOfField);
              //TODO combine text, file, and number because they all do the same thing here
              if(typeOfField === "text")
              {
                var getTitle = "<input type='text' id='title' class='form-control' placeholder='Enter a Title'>";
                var getDescription = "<input type='text' id='description' class='form-control' placeholder='Enter a Description'>";
                $("#submitForm").removeClass("hidden");
                $(".empty").html("<div class='form-group'>" + getTitle + getDescription + "<div>");
              }
              else if(typeOfField === "file")
              {
                //this checks to see if a file type was already used and prevents it from being used twice.  
                if(vm.fileUsed == true)
                {
                  alert("File type should only be used once per form. Please choose another input type.")
                }
                else if(vm.fileUsed == false)
                {
                  var getTitle = "<input type='text' id='title' class='form-control' placeholder='Enter a Title'>";
                  var getDescription = "<input type='text' id='description' class='form-control' placeholder='Enter a Description'>";
                  $("#submitForm").removeClass("hidden");
                  $(".empty").html("<div class='form-group'>" + getTitle + getDescription + "<div>");
                  vm.fileUsed = true;
                } 
              }
              else if(typeOfField === "dropdown")
              {
                vm.numOfOptions = prompt("Enter the number of options you want", "3");
                var getTitle = "<input type='text' id='title' class='form-control' placeholder='Enter a Title'>";
                var getDescription = "<input type='text' id='description' class='form-control' placeholder='Enter a Description'>";
                var options = "";
                for(var i = 1; i <= vm.numOfOptions; i++)
                {
                  options += "<input type='text' class='form-control' id='option" + i + "' placeholder='Option" + [i] + "'>";
                }
                 $("#submitForm").removeClass("hidden");
                 $(".empty").html("<div class='form-group'>" + getTitle +  getDescription  + options + "<div>");
              }
              else if(typeOfField === "number")
              {
                var getTitle = "<input type='text' id='title' class='form-control' placeholder='Enter a Title'>";
                var getDescription = "<input type='text' id='description' class='form-control' placeholder='Enter a Description'>";
                $("#submitForm").removeClass("hidden");
                $(".empty").html("<div class='form-group'>" + getTitle + getDescription + "<div>");
              }
              else if(typeOfField === "checklist")
              {
                vm.numOfOptions = prompt("Enter the number of options you want", "3");
                var getTitle = "<input type='text' id='title' class='form-control' placeholder='Enter a Title'>";
                var getDescription = "<input type='text' id='description' class='form-control' placeholder='Enter a Description'>";
                var options = "";
                for(var i = 1; i <= vm.numOfOptions; i++)
                {
                 // options += "<input type='text' class='form-control' id='option" + i + "' placeholder='Option" + [i] + "'>";
                 options += "<input type='text' class='form-control' id='option" + i + "' placeholder='Checkbox" + [i] + "'>";
                }
                 $("#submitForm").removeClass("hidden");
                 $(".empty").html("<div class='form-group'>" + getTitle +  getDescription  + options + "<div>");
              }
              
            };
            vm.CreateField = function()
            {
              
               
              vm.title = $("#title").val();
              vm.description = $("#description").val();
              var title = "<label for='title'>" + vm.title + "</label>";
              if(vm.typeOfField == "text")
              {
                vm.input = "text";
                var input = "<input type='" + vm.input + "' class='form-control'>";
              }
              //testing area
              else if(vm.typeOfField == "file")
              {
                vm.input = "file";
                var input = "<input type='" + vm.input + "' name='image' class='form-control'>";
              }
              //testing area
              else if(vm.typeOfField == "number")
              {
                vm.input = "number";
                var input = "<input type='" + vm.input + "' class='form-control'>";
              }
              
              /* because description is optional, I'm using an if statement here to check if
              the description is empty so that i don't add unnecessary formatting to the page.*/
              if(vm.description !== "")
              {
                var description = "<small class='form-text text-muted'>" + vm.description + "</small>";
              }
              else
              {
                var description = "";
              }
              
              if(vm.typeOfField == "checklist")
              {
               vm.input = "checkbox";
              var optionsText = ""; 
              var options = "";
              for(var i = 1; i <= vm.numOfOptions; i++)
                {
                  var tempId = "#option" + i;
                  var tempValue = $(tempId).val();
                  //options += "<br><input type='checkbox' class='form-check-input' id='exampleCheck" + i + "' >";
                  //options += "<label class='form-check-label' for='exampleCheck" + i + "'>" + tempValue + "</label>";
                  options += "<div class='checkbox'><label><input type='checkbox' value='" + tempValue + "'>" + tempValue + "</label></div>";
                  optionsText += tempValue;
                  if(i != vm.numOfOptions)
                  {
                    optionsText += "-";
                  } 
                }
              
            //  <div class="form-group form-check">
            //  <input type="checkbox" class="form-check-input" id="exampleCheck1">
            //  <label class="form-check-label" for="exampleCheck1">Check me out</label>
            //  </div>
            	
            	
              }
            
              //this for loop is only needed if the type is dropdown so I wrapped it in an if statment
              if(vm.typeOfField == "dropdown")
              {
                 vm.input = "dropdown";
                //optionsText will be used to store the options values in the database
                var optionsText = "";
                /*the options variable contains html formatting needed for the bootstrap dropdown. Inside the for loop I add
                the list items for the dropdown based on what the user selected in the CreateField function above*/
                var options = "<div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Select an Option</button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>"
                for(var i = 1; i <= vm.numOfOptions; i++)
                {
                  var tempId = "#option" + i;
                  var tempValue = $(tempId).val();
                  options += "<a class='dropdown-item' href='#'>" + tempValue + "</a>"
                  optionsText += tempValue;
                  //this if statement makes sure that i don't add an extra - to the end of the string
                  if(i != vm.numOfOptions)
                  {
                    optionsText += "-";
                  }  
                }
                options += "</div></div>"; 
              }
            
              //Now I add the html to the empty div with the class .newform, and also add html to the .formInProgress
              if(vm.typeOfField  == "checklist")
              {
                $(".newform").append("<div class='form-group form-check'>" + title + options  + description + "</div>");
                $(".formInProgress").append("<div class='form-group'>" + title + options + description + "</div>");
                //var arrayPosition = vm.formData.length;
                vm.formData = vm.title + "|" + vm.description + "|" + vm.input + "|" + optionsText; 
              }
              else if(vm.typeOfField == "text" || vm.typeOfField  == "number" || vm.typeOfField == "file")
              {
                $(".newform").append("<div class='form-group'>" + title + input + description + "</div>");
                $(".formInProgress").append("<div class='form-group'>" + title + input + description + "</div>");
                //var arrayPosition = vm.formData.length;
                vm.formData = vm.title + "|" + vm.description + "|" + vm.input; 
              }
              else if(vm.typeOfField == "dropdown")
              {
                $(".newform").append("<div class='form-group'>" + title + options + description + "</div>");
                $(".formInProgress").append("<div class='form-group'>" + title + options + description + "</div>");
                //I commented the line below and replaced vm.formData[arrayPosition] with vm.formData
                //var arrayPosition = vm.formData.length;
                vm.formData = vm.title + "|" + vm.description + "|" + vm.input + "|" + optionsText; 
                // alert(vm.formData[arrayPosition]);              
              }
              //testing area
                var testData = vm.formName + "|" + vm.formData;
                
             //   alert(testData);
                
              if(vm.XMLHttpRequestObject)
                {
                  vm.XMLHttpRequestObject.open("POST", "ajaxtest.php");
                  vm.XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  
                  vm.XMLHttpRequestObject.onreadystatechange = function()
                    {
                      if(vm.XMLHttpRequestObject.readyState == 4 && vm.XMLHttpRequestObject.status == 200)
                      {
                        var returnedData = vm.XMLHttpRequestObject.responseText;
                        console.log(returnedData);
                        if(returnedData == "success")
                        {
                 //!!!!       alert("code ran successfully");
                        }
                        else
                        {
                 //!!!!       alert("failed");
                        }
                        
                      }
                    }
                    console.log("here: " + testData);
                  vm.XMLHttpRequestObject.send("data=" + testData);
                }
              
              //hide button and clear out old fields
              $("#submitForm").addClass("hidden");
              $(".empty").html("");
                
              return false; 
              
              
        
              //TODO change this to a toaster - note: the line below won't run right now because of the line above
              //alert("Your " + vm.typeOfField + " field has been added. Add another field or click 'Save Changes' if you are finished.");
              
              
              
            };
              
        vm.CreateForm = function()
        {
   //temporarily commented out the line below so that the new form doesn't show.     
   //           $("#newform").removeClass("hidden");
   
   
              $('#exampleModal').modal('toggle');
              /* 
              	var testData = vm.formName + "|";
                for(var i = 0; i < vm.formData.length; i++)
                {
                //TODO this is where i should be able to insert rows
                 testData += vm.formData[i];
                }
                alert(testData);
                //closes the modal
                $('#exampleModal').modal('toggle');
                
                Commented out because i have moved this to more appropriate areas. can be deleted
                if(vm.XMLHttpRequestObject)
                {
                  vm.XMLHttpRequestObject.open("POST", "ajaxtest.php");
                  vm.XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  
                  vm.XMLHttpRequestObject.onreadystatechange = function()
                    {
                      if(vm.XMLHttpRequestObject.readyState == 4 && vm.XMLHttpRequestObject.status == 200)
                      {
                        var returnedData = vm.XMLHttpRequestObject.responseText;
                        console.log(returnedData);
                        if(returnedData == "success")
                        {
                        alert("code ran successfully");
                        }
                        else
                        {
                        alert("failed");
                        }
                        
                      }
                    }
                    console.log("here: " + testData);
                  vm.XMLHttpRequestObject.send("data=" + testData);
                }
                return false; 
                */
                
    //the line below will reload the page so that the database can show the new form. This may need to be done differently later
              location.reload();
        };
        vm.CreateAccount = function()
        {
               
          var email = $("#exampleInputEmail2").val();
          var password = $("#exampleInputPassword2").val();
          var is_admin = 0;
          
          //the line below runs the validate function from validate.js
          var validating = validate("createAccount", email, password);
          
          if(!validating)
          {
          console.log("validation failed");
          }
          
          else
          {
          var testData = email + "|" + password + "|" + is_admin;
            console.log(testData);
          
          
          
            if(vm.XMLHttpRequestObject)
                {
                  vm.XMLHttpRequestObject.open("POST", "createaccount.php");
                  vm.XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  
                  vm.XMLHttpRequestObject.onreadystatechange = function()
                    {
                      if(vm.XMLHttpRequestObject.readyState == 4 && vm.XMLHttpRequestObject.status == 200)
                      {
                        var returnedData = vm.XMLHttpRequestObject.responseText;
                        console.log("returned data: " + returnedData);
                        if(returnedData == "success")
                        {
                        alert("Your account has been created");
                        }
                        else
                        {
                 //!!!!       alert("failed");
                        }
                        
                      }
                    }
                    console.log("here: " + testData);
                  vm.XMLHttpRequestObject.send("data=" + testData);
                  $('#createAccountModal').modal('toggle');
                }
          
             }  //end else statement
        }; //end vm.CreateAccount
       vm.Login = function()
       {
         var email = $("#exampleInputEmail1").val();
         var password = $("#exampleInputPassword1").val();
         var testData = email + "|" + password; 
         console.log(email + "-" + password);
         //the line below runs the validate function from validate.js
         var validating = validate("login", email, password);
         if(!validating)
         {
           console.log("validation failed");
         }
          
         else
         {
         //testing area !!!!!!
         
         if(vm.XMLHttpRequestObject)
                {
                  vm.XMLHttpRequestObject.open("POST", "checklogin.php");
                  vm.XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  
                  vm.XMLHttpRequestObject.onreadystatechange = function()
                    {
                      if(vm.XMLHttpRequestObject.readyState == 4 && vm.XMLHttpRequestObject.status == 200)
                      {
                        var returnedData = vm.XMLHttpRequestObject.responseText;
                        //console.log("returned data: " + returnedData);
                        if(returnedData == "success-user")
                        {
                          window.location.href = "user.php";
                        }
                        else if(returnedData == "success-admin")
                        {
                          window.location.href = "admin.php";
                        }
                        else
                        {
                          alert(returnedData + ". Check your spelling or Create A New Account");
                        }
                        
                      }
                    }
                    console.log("here: " + testData);
                  vm.XMLHttpRequestObject.send("data=" + testData);
                }
          
             }  //end else statement
         
           //testing area !!!!!!
         
       }; //end vm.login
       vm.CreateUser = function()
       {
       var email = $("#newUserEmail").val();
       var password = $("#newUserPassword").val();
       var is_admin;
       var checkBox = document.getElementById("newUserCheck");
       if (checkBox.checked == true)
       {
         is_admin = 1;
       }
       else
       {
         is_admin = 0;
       }
       var testData = email + "|" + password + "|" + is_admin;
       
       
       //the line below runs the validate function from validate.js
       var validating = validate("createUser", email, password);
          
       if(!validating)
       {
         console.log("validation failed");
       }
       else
       {
       console.log("i made it this far: " + testData);
       //testing area	
       if(vm.XMLHttpRequestObject)
                {
                  vm.XMLHttpRequestObject.open("POST", "createaccount.php");
                  vm.XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                  
                  vm.XMLHttpRequestObject.onreadystatechange = function()
                    {
                      if(vm.XMLHttpRequestObject.readyState == 4 && vm.XMLHttpRequestObject.status == 200)
                      {
                        var returnedData = vm.XMLHttpRequestObject.responseText;
                        console.log("returned data: " + returnedData);
                        if(returnedData == "success")
                        {
                        alert("Your account has been created");
                        }
                        else
                        {
                 //!!!!       alert("failed");
                        }
                        
                      }
                    }
                    console.log("here: " + testData);
                  vm.XMLHttpRequestObject.send("data=" + testData);
                  $('#createUserModal').modal('toggle');
                }
       //end testing area
       }
       
       
       };
       vm.ChangeModalView = function(index)
            {
            let modalSource = "exampleModal" + index;
            console.log("modalSource " + modalSource);
            alert(modalSource);
            };

       vm.ResponsesTab = function()
            {
                //I might not use this function... It depends on if i can find a better way to retrieve the formid when clicking on 'responses'
                //for now I am doing this functionality in the script.js file
            };



      });


      
      
})();