$(function() {

 $("input").focus(
 	function () {
      $(this).prev("label").css("font-weight", "bold");
      $(this).css("background", "cyan");
  });

 $("div").hover(
 	function () {
    	$(this).find("input").toggleClass("hover_class");
 	});



});
