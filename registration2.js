//import reverse from 'reverse-object-order';
/* var modal = document.getElementById('id01'); 
  
        window.onclick = function(event) { 
            if (event.target == modal) { 
                modal.style.display = "none"; 
            } 
        } */
var rem =0;
var OK =0;     


function registerListener() {
  document.getElementsByName("pswfirst")[0].addEventListener('change', checkPassStrength);
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}
function checkPassStrength(pwd) {
    //alert(pwd);
    var score = scorePassword(pwd);
    //alert(score);
    if (score > 80 && pwd.length >= 8)
      { document.getElementById("passbox").setAttribute("style","background:Green;");
    document.getElementById("passbox").innerHTML = "Strong";
    document.getElementById('repeatpwd').disabled = false;
       
      }  
     else if (score > 60 && pwd.length >=8)
       {
            document.getElementById("passbox").setAttribute("style","background:LightGreen;");
       document.getElementById("passbox").innerHTML = "Moderate";
       document.getElementById('repeatpwd').disabled = false ;
       } 
     else if (score >= 30 && pwd.length >= 8)
       {
              document.getElementById("passbox").setAttribute("style","background:Yellow;");
       document.getElementById("passbox").innerHTML = "Weak";
       document.getElementById('repeatpwd').disabled = false;
       } 
       else if(score < 30 || pwd.length < 8)
       {
         document.getElementById("passbox").setAttribute("style","background:Red;");
       document.getElementById("passbox").innerHTML = " Very Weak";
       if(pwd.length < 8)
       {
         document.getElementById("passbox").innerHTML = " Minimum 8 characters required";
       }
       document.getElementById('repeatpwd').disabled = true;


       }

    
}

function passmatch ()

{
  
  if(document.getElementById("repeatpwd").value== document.getElementById("pwd").value)
  {
           document.getElementById('Sign').disabled = false;
           //document.getElementById('Sign').style.background = green;
           OK =1;


  }
  if(document.getElementById("repeatpwd").value != document.getElementById("pwd").value)
  {
           document.getElementById('Sign').disabled = true;
             //         document.getElementById('Sign').style.background = lightgreen;

  }

}
/*
 function WriteCookie() {
              var now = new Date();
              
              
              var q = now.getMonth();
              
              
              alert(now);
               if(document.getElementById("remember").checked) 
                {
                 now.setMonth(q + 1);
                 var cookie = "pwd=" + document.getElementById("pwd").value;

                 cookie += ",email=" + document.getElementById("email").value;
                 cookie += ",no=" + document.getElementById("no").value;
                 cookie += ",repeatpwd=" + document.getElementById("repeatpwd").value;
                 cookie += ",Expires:" + now.toUTCString() + ";";
                 console.log(cookie);alert(now);
                }
                else if(!document.getElementById("remember").checked)
                { 
                  now.setMonth(q - 1);

                 var cookie = "pwd=" + document.getElementById("pwd").value;
                 cookie += ",email=" + document.getElementById("email").value;
                 cookie += ",no=" + document.getElementById("no").value;
                 cookie += ",repeatpwd=" + document.getElementById("repeatpwd").value;
                 cookie += ",Expires:" + now.toUTCString() + ";";
                 alert("cookie removed");
                 alert(now);

                }
               document.cookie = cookie;
               console.log(document.cookie);
               alert(document.cookie  );
            }
*/
 /*function autofill ()
 {
   
     var allcookies = document.cookie;
     // Get all the cookies pairs in an array
     cookiearray = allcookies.split(',');  
    // Now take key value pair out of this array
     for(var i=0; i<cookiearray.length-2; i++) {
          if(i == 3 && OK == 0)
            continue;
          document.getElementById(cookiearray[i].split('=')[0]).value = cookiearray[i].split('=')[1];
   }
}*/
function autofilll ()
{     
      var allcookies = document.cookie;
      // Get all the cookies pairs in an array
      cookiearray = allcookies.split(',');  
      // Now take key value pair out of this array
      if(cookiearray[2].split('=')[1])
      {for(var i=0; i<cookiearray.length-2; i++) {
            document.getElementById(cookiearray[i].split('=')[0]).value = cookiearray[i].split('=')[1];
     } 
    
}}
function logout()
{
    WriteCookiel(0);
    location.reload();
}
function WriteCookiel(log) 
{
  var now = new Date();
  var q = now.getMonth();
  //alert(now);
   if(log == 1)  
   {
     now.setMonth(q + 1);
     var cookie = "pwdl=" + document.getElementById("pwdl").value;
     cookie += ",emaill=" + document.getElementById("emaill").value;
     cookie += ",rememberl=" + document.getElementById("rememberl").checked;
     cookie += ",Expires:" + now.toUTCString() + ";";
     //console.log(cookie);alert(now);
    }
    else if(log == 0)
    { 
      now.setMonth(q - 1);

     var cookie = "pwdl=" + document.getElementById("pwdl").value;
     cookie += ",emaill=" + document.getElementById("emaill").value;
     cookie += ",rememberl=" + document.getElementById("rememberl").checked;
     cookie += ",Expires:" + now.toUTCString() + ";";
     //alert("cookie removed");
     //alert(now);

    }
   document.cookie = cookie;
   console.log(document.cookie);
   //alert(document.cookie);
}


function registerUser()
{ 
  if((document.getElementById("repeatpwd").value== document.getElementById("pwd").value) && document.getElementById("pwd").value.length > 0)
 {
  var mail = document.getElementById('email').value;
  var pwd = document.getElementById('pwd').value;
  var phone = document.getElementById('no').value;
  var uriString = "http://localhost/webtech/signup.php?"
    //{email:mail,pswfirst:pwd,phonenumber:phone},
  var dataToSend = 'email=' + mail + '&pswfirst=' + pwd + '&phonenumber=' + phone;
  var jsonToSend = {
    'email': mail,
    'pswfirst': pwd,
    'phonenumber': phone
  };
  //alert("posting: " + dataToSend + " to " + uriString);
  var http = new XMLHttpRequest();
  http.open("post", uriString, false);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.setRequestHeader("Content-Length", dataToSend.length);
  http.send(dataToSend);
  //alert(http.responseText)
  var response = JSON.parse(http.responseText);
  //alert(response[0]);
  if(response == "Someone already registered using this email")
  {
      alert("If you already have an account, please login using your registered email ID and password");
  }  
  else
  {
    //alert(document.getElementById("tab7").innerHTML);
    response1 = "<p>" + response[0] + "</p>";
    var response2 =  '<form class="modal-content animate">\n' + 
    '<div class="container">\n' +
        '<label><b>Your Email</b></label>\n'  +
        '<input type="text" id = "email2"  value =' +  response[1] + ' readonly>\n' +
        '<label><br><b>Your phone number</b></label>\n' +
        '<input type="tel" id = "no2" value =' + response[3] + ' readonly>\n';
    
    var div = document.getElementById("tab7");
    div.innerHTML = response2;
    //alert(document.getElementById("tab7").innerHTML);
    changeTab('tab3');
    document.getElementById("taba").innerHTML = "<br>";
    document.getElementById("tabb").innerHTML = "<br>";
    document.getElementById("tabc").innerHTML = "<br>";
    document.getElementById("tabd").innerHTML = "<br>";
  }
 }
 else if(document.getElementById("repeatpwd").value != document.getElementById("pwd").value)
 {
          alert("Passwords do not match. Please try again");
 }
 else
 {
    alert("Please fill all details correctly.");
 }
}
function loginuser(m,p)
{ if(m ==0)
   {  
  var mail = document.getElementById('emaill').value;
  var pwd = document.getElementById('pwdl').value;
   }
   else
   {
       var mail = m;
       var pwd = p;
   }
  
  var uriString = "http://localhost/webtech/login.php?"
    //{email:mail,pswfirst:pwd,phonenumber:phone},
  var dataToSend = 'email=' + mail + '&pswfirst=' + pwd;
  var jsonToSend = {
    'email': mail,
    'pswfirst': pwd,
  };
  //alert("posting: " + dataToSend + " to " + uriString);
  var http = new XMLHttpRequest();
  http.open("post", uriString, false);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.setRequestHeader("Content-Length", dataToSend.length);
  http.send(dataToSend);
  //alert(http.responseText)
  var response = JSON.parse(http.responseText);
  //alert(response[0]);
  //alert(document.getElementById("tab7").innerHTML);
  response1 = "<p>" + response[0] + "</p>";
  if(response != "User not found" && response!= "Password wrong")
  { alert(response);
    var response2 =  '<form class="modal-content animate" id ="profile">\n' + 
   '<div class="container">\n' +
      '<label><b>Your Email</b></label>\n'  +
      '<input type="text" id = "email2"  value =' +  mail + ' readonly>\n' +
      '<label><br><b>Your phone number</b></label>\n' +
      '<input type="tel" id = "no2" value =' + response[1] + ' readonly>\n';
  var div = document.getElementById("tab7");
  div.innerHTML = response2;
  //alert(document.getElementById("tab7").innerHTML);
          OK =1;
          WriteCookiel(1);
  document.getElementById("Notice1").style.display = 'none';
  document.getElementById("cform").children[0].disabled = false;
  changeTab('tab3');
  document.getElementById("taba").innerHTML = "<br>";
  document.getElementById("tabb").innerHTML = "<br>";
  document.getElementById("tabc").innerHTML = "<br>";
  document.getElementById("tabd").innerHTML = "<br>";

   }
   else 
   {
     alert(response);
   }




}
function postQ()
{
  var question = document.getElementById('confirmationText').value;
 // var pwd = document.getElementById('pwdl').value;
  var user = document.getElementById('profile').children[0].children[1].value;
  //alert(user);
  var uriString = "http://localhost/webtech/questions.php?"
    
  var dataToSend =  'user=' + user + '&question=' + question;
 
  //alert("posting: " + dataToSend + " to " + uriString);
  var http = new XMLHttpRequest();
  http.open("post", uriString, false);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.setRequestHeader("Content-Length", dataToSend.length);
  http.send(dataToSend);
  //alert(http.responseText);
  var response = JSON.parse(http.responseText);
  //alert(response[0]);
  //alert(document.getElementById("tab7").innerHTML);
  //response1 = "<p>" + response[0] + "</p>";
  if(response != "Someone has asked the exact question")
  { 
    alert("Question has been successfully posted");
    document.getElementById("confirmationText").value = "";
  }
   else 
   {
     alert("Please re-enter");
   }


}
function searchQ()
{
  //import reverse from 'reverse-object-order';
  var question = document.getElementById('confirmationText1').value;
 // var pwd = document.getElementById('pwdl').value; 
  var uriString = "http://localhost/webtech/search.php?"
    
  var dataToSend = 'question=' + question;
 
  //alert("posting: " + dataToSend + " to " + uriString);
  var http = new XMLHttpRequest();
  http.open("post", uriString, false);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.setRequestHeader("Content-Length", dataToSend.length);
  http.send(dataToSend);
  //alert(http.responseText);
  var response = JSON.parse(http.responseText);
  //alert(JSON.stringify(response[1]));
  //alert(document.getElementById("tab7").innerHTML);
  //response1 = "<p>" + response[0] + "</p>";
  var keyArray = [];
  if(response != "Keyword not found")
  { 
    //alert(document.getElementById("taba").innerHTML);
    var responsehtml = '<table style="width:50%; position:absolute; top: 100px;">\n' +
    '<tr>\n'+
      '<th>Question</th>\n'+
      '<th>Date</th>\n'+
      '<th>Username</th>\n'+
    '</tr>\n';
    for(i in response[1])
    {
      keyArray.push(i);
      responsehtml = responsehtml + '<tr>\n'+
      '<td>' + i + '</td>\n'+
      '<td>' + response[1][i][0] + '</td>\n'+
      '<td>' + response[1][i][1] + '</td>\n'+ 
     '</tr>\n'; 
    }
    responsehtml = responsehtml + '</table>\n';
    var div = document.getElementById("tabc");
    div.innerHTML = responsehtml;
    //alert(document.getElementById("tabc").innerHTML);
  
    document.getElementById("confirmationText1").value = "";
    var allresponse = '<table style="width:50%; position:absolute; top: 100px;">\n' +
    '<tr>\n'+
      '<th>Question</th>\n'+
      '<th>Date</th>\n'+
      '<th>Username</th>\n'+
    '</tr>\n';
    for(i in response[2])
    {
      allresponse = allresponse + '<tr>\n'+
      '<td>' + i + '</td>\n'+
      '<td>' + response[2][i][0] + '</td>\n'+
      '<td>' + response[2][i][1] + '</td>\n'+ 
     '</tr>\n'; 
    }
    allresponse = allresponse + '</table>\n';
    div = document.getElementById("taba");
    div.innerHTML = allresponse;
    div = document.getElementById("tabb");
    div.innerHTML = allresponse;
    //alert(document.getElementById("taba").innerHTML);
    var revresponse = '<table style="width:50%; position:absolute; top: 100px;">\n' +
    '<tr>\n'+
      '<th>Question</th>\n'+
      '<th>Date</th>\n'+
      '<th>Username</th>\n'+
    '</tr>\n';
    //for(i in reverse(response[1]))
    for(i = keyArray.length - 1; i >= 0; i--)
    {
      dictKey = keyArray[i];
      revresponse = revresponse + '<tr>\n'+
      '<td>' + dictKey + '</td>\n'+
      '<td>' + response[1][dictKey][0] + '</td>\n'+
      '<td>' + response[1][dictKey][1] + '</td>\n'+ 
     '</tr>\n'; 
    }
    revresponse = revresponse + '</table>\n';
    div = document.getElementById("tabd");
    div.innerHTML = revresponse;
    //alert(document.getElementById("tabd").innerHTML);
    

  }
   else 
   {
     alert("Please re-enter");
   }

}
function autologin()
{
    var allcookies = document.cookie;
      // Get all the cookies pairs in an array
      cookiearray = allcookies.split(',');  
      // Now take key value pair out of this array
      if(cookiearray[0].split('=')[1] != "" && cookiearray[1].split('=')[1] != "")
      {
          email = cookiearray[0].split('=')[1];
          password = cookiearray[1].split('=')[1];
          loginuser(email,password);
}
}