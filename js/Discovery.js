  $(document).ready(function(){
    $("#flip").click(function(){
      $(".outerBody").hide();
      $("#panel").slideDown("slow");
    });
  });
  
  $(document).ready(function(){
    $("#crossBtn").click(function(){
      console.log("in close btn");
      $("#panel").slideUp("slow");
    });
  });

  $("#crossBtn").on('click', function () {
    console.log("in close btn");
    //$("#panel").slideUp("slow");
  });

  console.log("current window width ",$(window).width());
  console.log("current document width ",$(document).width());