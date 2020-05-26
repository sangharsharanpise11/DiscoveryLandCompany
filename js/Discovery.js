function myFunction(x) {
  console.log("hi in x");
    x.classList.toggle("change");
  }

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  