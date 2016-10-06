function validate() {
  var username = document.getElementById("userName").value;
  var password = document.getElementById("password").value;

  if(username === "admin" && (password === "admin" || password === "Admin")) {
    localStorage.setItem("loggedOutVodqa", 0);
    window.location.href = "blog.html";
  } else {
    var $errMsg = document.getElementById("errorMessage");
    $errMsg.style.display = "block";
    $errMsg.innerHTML = "Wrong username or password!"
  }

  return false;
}

if(localStorage.getItem("loggedOutVodqa") === '1') {
  document.getElementById("userName").value = "admin";
  document.getElementById("password").value = "admin";
}
