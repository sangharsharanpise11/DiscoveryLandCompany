  $(document).ready(function(){
    $("#flip").click(function(){
      $(".outerBody").hide();
      $("#panel").slideDown("slow");
    });
  });
  
  $("#crossBtn").on('click', function () {
    console.log("in close btn 2");
    $("#panel").slideUp("slow");
    $(".outerBody").show();
  });

  console.log("current window width ",$(window).width());
  console.log("current document width ",$(document).width());