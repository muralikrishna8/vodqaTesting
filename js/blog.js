function professionSelected(select) {
  if(select.value === "other") {
    $("#otherProfession").show();
  } else {
    $("#otherProfession").hide();
  }
};

function validate() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var experience = $('input[name=experience]:checked').val();
  var blogArea = document.getElementById("blogArea").value;
}

function resetting() {
  
}
