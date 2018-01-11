$(document).ready(function() {

$("form#quiz").submit(function(event) {
  var myAge = parseInt($("input#age").val());
  var myGender = $("input:radio[name=gender]:checked").val();
  var myCategory = $("#category").val();
  event.preventDefault();


  $(".celeb").hide();

  if ( myAge > 30 && myGender==='female' && myCategory==='fame') {
    $("#portman").toggle();
  } else if ( myAge > 40 && myGender==='male' && myCategory==='children' ) {
    $("#beckham").toggle();
  } else if ( myCategory==='fantasy') {
    $("#croft").toggle();
  } else if ( myCategory==='politician') {
    $("#sanders").toggle();
  } else {
    $("#winfrey").toggle();
  }

});

});
