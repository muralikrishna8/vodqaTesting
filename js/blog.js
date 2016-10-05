function validate() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var blogArea = document.getElementById("blogArea").value;
}

function resetting() {
  var $otherProfession = $("#otherChk");
  if($otherProfession.prop('checked')) {
    setTimeout(function() {
      $otherProfession.prop('checked', true);
    }, 50);
  }
}
