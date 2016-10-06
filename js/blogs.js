$(document).ready(function() {
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
});
