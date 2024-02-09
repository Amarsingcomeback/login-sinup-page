// signup Features

function signUp() {
  let accept = document.getElementById("accept").checked;
  if (accept) {
    var eMail = document.getElementById("email").value;
    var user = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    console.log(eMail, user, password);
  } else {
    console.log("please check on Term on condition");
  }
  //Store value in local storeage
  var email = localStorage.setItem("email", eMail);
  var user = localStorage.setItem("userName", user);
  var pass = localStorage.setItem("password", password);
}

// loging page disine using js
function login() {
  if (
    localStorage.getItem("userName") ==
      document.getElementById("userName").value &&
    localStorage.getItem("password") ==
      document.getElementById("password").value
  ) {
    alert("login sucessfully");
  } else {
    alert("incorect password");
  }
}

//store userName,password,email in local storage
