$(function(){
    //Listen for a click on any of the dropdown items
    $(".makedropdownwork0 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork0']").val(value);
        $("#dropdownMenuButton0:first-child").text($(this).text());
    });
    $(".makedropdownwork1 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork1']").val(value);
        $("#dropdownMenuButton1:first-child").text($(this).text());
    });
    $(".makedropdownwork2 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork2']").val(value);
        $("#dropdownMenuButton2:first-child").text($(this).text());
    });
    $(".makedropdownwork3 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork3']").val(value);
        $("#dropdownMenuButton3:first-child").text($(this).text());
    });
    $(".makedropdownwork4 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork4']").val(value);
        $("#dropdownMenuButton4:first-child").text($(this).text());
    });
    $(".makedropdownwork5 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork5']").val(value);
        $("#dropdownMenuButton5:first-child").text($(this).text());
    });
    $(".makedropdownwork6 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork6']").val(value);
        $("#dropdownMenuButton6:first-child").text($(this).text());
    });
    $(".makedropdownwork7 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork7']").val(value);
        $("#dropdownMenuButton7:first-child").text($(this).text());
    });
    $(".makedropdownwork8 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork8']").val(value);
        $("#dropdownMenuButton8:first-child").text($(this).text());
    });
    $(".makedropdownwork9 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork9']").val(value);
        $("#dropdownMenuButton9:first-child").text($(this).text());
    });
    $(".makedropdownwork10 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork10']").val(value);
        $("#dropdownMenuButton10:first-child").text($(this).text());
    });
    $(".makedropdownwork11 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork11']").val(value);
        $("#dropdownMenuButton11:first-child").text($(this).text());
    });
    $(".makedropdownwork12 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork12']").val(value);
        $("#dropdownMenuButton12:first-child").text($(this).text());
    });
    $(".makedropdownwork13 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork13']").val(value);
        $("#dropdownMenuButton13:first-child").text($(this).text());
    });
    $(".makedropdownwork14 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork14']").val(value);
        $("#dropdownMenuButton14:first-child").text($(this).text());
    });
    $(".makedropdownwork15 li").click(function(){
        var value = $(this).attr("value");
        $("input[name='makedropdownwork15']").val(value);
        $("#dropdownMenuButton15:first-child").text($(this).text());
    });

    var saveFormId = 0;
    //This list of functions is a workaround that allows me to switch modal tabs and get back to the original tab
    $("#Modal0").click(function() {
        positionOfArrayForSubmissionIds = 0;
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        $("#editTab").attr('data-target', '#exampleModal0');
       var formId = $("#getFormId0").val();
       GetFormData(formId);
       saveFormId = formId;
    });
    $("#Modal1").click(function() {
        positionOfArrayForSubmissionIds = 0;
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        $("#editTab").attr('data-target', '#exampleModal1');
        var formId = $("#getFormId1").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal2").click(function() {
        positionOfArrayForSubmissionIds = 0;
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        $("#editTab").attr('data-target', '#exampleModal2');
        var formId = $("#getFormId2").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal3").click(function() {
        positionOfArrayForSubmissionIds = 0;
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        $("#editTab").attr('data-target', '#exampleModal3');
        var formId = $("#getFormId3").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal4").click(function() {
        positionOfArrayForSubmissionIds = 0;
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        $("#editTab").attr('data-target', '#exampleModal4');
        var formId = $("#getFormId4").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal5").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal5');
        var formId = $("#getFormId5").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal6").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal6');
        var formId = $("#getFormId6").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal7").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal7');
        var formId = $("#getFormId7").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal8").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal8');
        var formId = $("#getFormId8").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal9").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal9');
        var formId = $("#getFormId9").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal10").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal10');
        var formId = $("#getFormId10").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal11").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal11');
        var formId = $("#getFormId11").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal12").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal12');
        var formId = $("#getFormId12").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal13").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal13');
        var formId = $("#getFormId13").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal14").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal14');
        var formId = $("#getFormId14").val();
        GetFormData(formId);
        saveFormId = formId;
    });
    $("#Modal15").click(function() {
        positionOfArrayForSubmissionIds = 0;
        $("#editTab").attr('data-target', '#exampleModal15');
        var formId = $("#getFormId15").val();
        GetFormData(formId);
        saveFormId = formId;
    });

    function GetFormData(formId)
    {
        //the two lines below reset the text of these spans to 1 so that it makes sense when you navigate between forms
        $("#SubmissionCount").text("1");
        $("#SubmissionNumber").text("1");

        var XMLHttpRequestObject = false;
        if (window.XMLHttpRequest)
        {
            XMLHttpRequestObject = new XMLHttpRequest();
        } else if (window.ActiveXObject)
        {
            XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if(XMLHttpRequestObject)
        {
            XMLHttpRequestObject.open("POST", "retrieveformdata.php");
            XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            XMLHttpRequestObject.onreadystatechange = function()
            {
                if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
                {
                    var returnedData = XMLHttpRequestObject.responseText;
                    //console.log("returned data: " + returnedData);
                    ViewFormData(returnedData);
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
            console.log("here: " + formId);
            var testHtml = $(".show").find("form").html();
            //(/Google/g,"Yahoo")
            //in the lines below i am changing most of the input types to text and readonly using regex
            var revisedHtml0 = testHtml.replace(/type="text"/g, 'input type="text" readonly');
            var revisedHtml1 = revisedHtml0.replace(/input type="file"/g, 'input type="text" readonly');
            var revisedHtml2 = revisedHtml1.replace(/input type="number"/g, 'input type="text" readonly');
            var revisedHtml3 = revisedHtml2.replace(/data-toggle="dropdown"/g, 'data-toggle="dropdown" disabled');
            var revisedHtml4 = revisedHtml3.replace(/input type="checkbox"/g, 'input type="checkbox" disabled');
            //var revisedHtml3 = revisedHtml2.replace('div class="dropdown"', 'div class="dropdown" readonly');
            //var revisedHtml4 = revisedHtml3.replace('</li></div></div>', '</li></div></div><input type="text">');
            console.log("no, its here: " + testHtml);
            XMLHttpRequestObject.send("data=" + formId);

           $("#responses-body").html(revisedHtml4);

        }
    } //End GetFormData



    //testing area __________________________



    function GetFormData2(formId)
    {
        var XMLHttpRequestObject = false;
        if (window.XMLHttpRequest)
        {
            XMLHttpRequestObject = new XMLHttpRequest();
        } else if (window.ActiveXObject)
        {
            XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if(XMLHttpRequestObject)
        {
            XMLHttpRequestObject.open("POST", "retrieveformdata.php");
            XMLHttpRequestObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            XMLHttpRequestObject.onreadystatechange = function()
            {
                if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
                {
                    var returnedData = XMLHttpRequestObject.responseText;
                    //console.log("returned data: " + returnedData);
                    ViewFormData(returnedData);
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


            XMLHttpRequestObject.send("data=" + formId);
        }
    }




    //end testing area __________________________

    var arrayOfSubmissionIds = [];
    var positionOfArrayForSubmissionIds;
    if(GetCookie("arrayPosition"))
    {
        positionOfArrayForSubmissionIds = GetCookie("arrayPosition");
    }
    else
    {
        positionOfArrayForSubmissionIds = 0;
    }
    //var positionOfArrayForSubmissionIds = 0;

    $("#leftArrow").click(function() {
        if(positionOfArrayForSubmissionIds >= 1)
        {
            positionOfArrayForSubmissionIds--;
        }
        console.log("positionOfArrayForSubmissionIds: " + positionOfArrayForSubmissionIds);
        console.log("arrayOfSubmissionIds: " + arrayOfSubmissionIds);
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        GetFormData2(saveFormId);
        $("#SubmissionNumber").text((positionOfArrayForSubmissionIds + 1));
    });
    $("#rightArrow").click(function() {
        if(arrayOfSubmissionIds.length > (positionOfArrayForSubmissionIds + 1))
        {
            positionOfArrayForSubmissionIds++;
        }
        console.log("positionOfArrayForSubmissionIds: " + positionOfArrayForSubmissionIds);
        console.log("arrayOfSubmissionIds: " + arrayOfSubmissionIds);
        SetCookie("arrayPosition", positionOfArrayForSubmissionIds, 1);
        GetFormData2(saveFormId);
        $("#SubmissionNumber").text((positionOfArrayForSubmissionIds + 1));
    });

    function ViewFormData(subArray) {
        console.log("hi: " + subArray);
        var arr = subArray.split("-");
        var createSubArray = arr[0];
        var subIDArray = createSubArray.split("|");
        arrayOfSubmissionIds = subIDArray;

        var createDataArray = arr[1];
        var dataArray = createDataArray.split("|");

        console.log("dataArray: " + dataArray);
        console.log(dataArray.length);
        console.log(dataArray[0]);
        console.log(dataArray[1]);


      //  var dataDescription = splitDataArray[0];
      //  var inputType = splitDataArray[1];
      //  console.log("dataDescription: " + dataDescription + "inputType: " + inputType);
        //testing area


        //numOfElements lets me know how many form elements are on the screen
        var numOfElements =  $(".show").find("label");
        //this for loop is currently just entering meaningless incrementing numbers and it doesn't include dropdowns and checkboxes.
        //i need to actually have this insert the real data, and I also need to somehow make it work for dropdowns and checkboxes.

        for(var i = 0; i < numOfElements.length; i++) {


                var splitDataArray = dataArray[i].split("*");
                var dataDescription = splitDataArray[0];
                var input_type = splitDataArray[1];
                console.log("dataDescription: " + dataDescription);
                console.log("input_type: " + input_type);


                var tempVar = $(".show").find("#input" + i);



            if(input_type == "dropdown")
            {
                $("#dropdownMenuButton" + i + ":first-child").text(dataDescription);
                $("#dropdownMenuButton" + i + "1").prop("disabled",true);
            }
            else if(input_type == "checkbox")
            {
                $('.show').find('.checkbox').each(function() {


                    if (this.innerText.trim() == dataDescription)
                    {
                           var checkMe = $(this).find('span > input');
                           checkMe[0].checked = true;
                    }
                        else {
                            var checkMe = $(this).find('span > input');
                            checkMe[0].checked = false;
                        }
                });

            }
            else if(input_type == "text" || input_type == "number")
            {
                tempVar.val(dataDescription);
            }
            else if(input_type == "file")
            {
                console.log("It made it!");
                 //var splitDataArrayFile = dataArray[dataArray.length].split("/");
                 //var dataDescriptionFile = splitDataArrayFile[0];
                 tempVar.val(dataDescription);
            }

        } //end for loop

        console.log("length..." + numOfElements.length);
        console.log(subIDArray + " " + dataArray);

        //sets the number of submissions on the front end. See SubmissionCount in admin.php
        $("#SubmissionCount").text(arrayOfSubmissionIds.length);
    } //end ViewFormData

    function SetCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function GetCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

});
