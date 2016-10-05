$(document).ready(function() {

  function renderStoredBlogs() {
    var blogs = JSON.parse(localStorage.getItem("blogsVodqa")) || [];
    var $accordion = $("#accordion");
    blogs.forEach(function(blog, index) {
      var expanded = (index === 0);
      var collapsed = index === 0 ? '' : 'class = "collapsed"';
      var collpaseBody = index === 0 ? 'in' : '';

      var $panel = $('<div class="panel panel-default">');
      var $heading = $('<div class="panel-heading" role="tab" id="heading'+index+'">');
      $heading.append('<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+index+'" aria-expanded="'+expanded+'" aria-controls="collapse'+index+'" '+collapsed+'>Blog #'+index+'</a>');

      var $panelBodyContainer = $('<div id="collapse'+index+'" class="panel-collapse collapse '+collpaseBody+'" role="tabpanel" aria-labelledby="heading'+index+'">');
      var $panelBody = $('<div class="panel-body">')
        .append('<b>Name: </b><span>'+blog.name+'</span><br />')
        .append('<b>Age: </b><span>'+blog.age+'</span><br />')
        .append('<b>Experience: </b><span>'+blog.experience+'</span><br />')
        .append('<b>Blog: </b><span>'+blog.blog+'</span><br />')
        .append('<b>Profession: </b><span>'+blog.profession+'</span><br />')

      $panelBodyContainer.append($panelBody);

      $panel.append($heading);
      $panel.append($panelBodyContainer)
      $accordion.append($panel);
    });

  }

  renderStoredBlogs();
});

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

  switch (profession) {
    case "Engineer":
      experience = "0-3";
      break;
    case "Doctor":
      experience = "3-7";
      break;
    case "Teacher":
      experience = "7-15";
      break;
    default:
      experience = "15+";
  }

  var saveCount = localStorage.getItem("saveCountVodqa") || 0;
  var blogs = JSON.parse(localStorage.getItem("blogsVodqa")) || [];

  if(saveCount == 0) {
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
    localStorage.setItem("saveCountVodqa", 0);
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
