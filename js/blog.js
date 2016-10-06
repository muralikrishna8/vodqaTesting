function professionSelected(select) {
  if(select.value === "other") {
    $("#otherProfession").show();
  } else {
    $("#otherProfession").hide();
  }
};

function validate() {
  var name = $("#name").val();
  var age = $("#age").val();
  var experience = $('input[name=experience]:checked').val();
  var blogArea = $("#blogArea").val();
  var $profession = $("#profession");
  var profession = $profession.val() === "other" ? $("#otherProfession").val() : $profession.val();

  if(profession === "Teacher") {
    experience = "3-7";
  }

  var saveCount = parseInt(localStorage.getItem("saveCountVodqa")) || 0;
  var blogs = JSON.parse(localStorage.getItem("blogsVodqa")) || [];

  if(saveCount%3 === 0) {
    localStorage.setItem("saveCountVodqa", 1);
    blogs.push({
      'name': name,
      'age': age,
      'experience': experience,
      'blog': blogArea,
      'profession': profession
    });
    localStorage.setItem("blogsVodqa", JSON.stringify(blogs));
  } else {
    if((saveCount+1) === 3){
      localStorage.setItem("saveCountVodqa", 0);
    } else {
      localStorage.setItem("saveCountVodqa", 2);
    }
    return true;
  }
}

function resetting() {
  var otherVal = $("#otherProfession").val();
  var selectVal = $("#profession").val();
  setTimeout(function(){
    if(selectVal === "other") {
      $('#profession option[value="other"]').prop("selected", true);
    }
    $("#otherProfession").val(otherVal);
  });
}

$(document).ready(function() {
  $("#logout").click(function() {
    localStorage.setItem("loggedOutVodqa", 1);
    window.location.href = "/signin.html";
  });
})
