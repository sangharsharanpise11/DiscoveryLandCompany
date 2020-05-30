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

  // $(".button").hover(function(){
  //   $(this).css("border", "1px solid black");
  //   }, function(){
  //   $("span").css("transform", "translateY(-100%)");
  // });