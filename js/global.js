$(function() {

 $("input").focus(
 	function () {
      $(this).prev("label").addClass("font_weight");
      $(this).addClass("cyan_class");
  });

  $("input").blur(
 	function () {
      $(this).prev("label").removeClass("font_weight");
      $(this).removeClass("cyan_class");
  });

 $("div").hover(
 	function () {
    	$(this).find("input").toggleClass("hover_class");
 	});



});
