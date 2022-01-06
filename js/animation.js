// JavaScript Document
$(document).ready(function(e) {
  $(".menu-open ul li a, .fullmenu ul li a, .button-section-arrow a, .button-section-arrow-footer a").click(function(e) {
		   e.preventDefault();
  var target = $(this).attr("href");
  $("html,body").animate({ scrollTop: $(target).offset().top}, 1000, "easeInOutQuad");
  });
  // Animation Menu
  $(".fullmenu ul li a").click(function(e) {
   e.preventDefault();
   $(".fullmenu").fadeOut(300);
   $(".hamb span:nth-child(1)").removeClass("one");
     $(".hamb span:nth-child(2)").css("opacity","1");
     $(".hamb span:nth-child(3)").removeClass("three");
   });
     $(".hamb").click(function(e) {
  		e.preventDefault();
  		if($(this).hasClass("on")){
          $(this).removeClass("on");
  		$(".fullmenu").fadeIn(300);
  		$(".hamb span:nth-child(1)").addClass("one");
  		$(".hamb span:nth-child(2)").css("opacity","0");
  		$(".hamb span:nth-child(3)").addClass("three");
  		}
  		else{
  			$(this).addClass("on");
  			$(".fullmenu").fadeOut(100);
  			$(".hamb span:nth-child(1)").removeClass("one");
  		    $(".hamb span:nth-child(2)").css("opacity","1");
  		    $(".hamb span:nth-child(3)").removeClass("three");
  			}
  		  });
// Animation waypoint
$("#homepage").waypoint(function(){
$("h1, header h2").addClass("enter");},
{
  offset: '100%'
});
$("#timeline").waypoint(function(){
$("#timeline h2, #timeline h3").addClass("enter");
},
{
  offset: '60%'
});
$("#why").waypoint(function(){
$("#why h2, #why h3").addClass("enter");},
{
  offset: '80%'
});
// Section Company
$("#company").waypoint(function(){
$("#company h2, #company h3").addClass("enter");},
{
  offset: '80%'
});
$("#company .box2").waypoint(function(){
$(".box2").addClass("animation-icon");
},
{
  offset: '60%'
});
$("#skills").waypoint(function(){
$("#skills h2, #skills h3").addClass("enter");},
{
  offset: '80%'
});
$("#work").waypoint(function(){
$("#work h2, #work h3").addClass("enter");},
{
  offset: '80%'
});
$("#contact").waypoint(function(){
$("#contact h2, #contact h3").addClass("enter");},
{
  offset: '80%'
});
  $("#homepage").waypoint(function(){
	$("#homepage .call-to-action, .button-section-arrow").addClass("opacity-1");
},
	{
		offset: '100%'
  });
  $(".background").waypoint(function(){
  $(".background, .background-mobile").addClass("opacity-1");
},
  {
    offset: '100%'
  });
  $("#contact").waypoint(function(){
  $("#contact .call-to-action, .button-section-arrow-footer").addClass("opacity-1");
},
  {
    offset: '50%'
  });
  $("#work .call-to-action").waypoint(function(){
  $("#work .call-to-action").addClass("opacity-1");
},
  {
    offset: '100%'
  });
  // Section Timeline
  $("#timeline").waypoint(function(){
  $("#vertical-line hr").addClass("hr1");
},
	{
		offset: '110%'
  });
    $("#orizontal-line-1").waypoint(function(){
$("#orizontal-line-1 hr").addClass("opacity-1");
},
	{
		offset: '70%'
});
    $("#orizontal-line-1-mobile").waypoint(function(){
$("#orizontal-line-1-mobile hr").addClass("opacity-1");
},
  {
    offset: '70%'
  });
  $("#orizontal-line-2").waypoint(function(){
$("#orizontal-line-2 hr").addClass("opacity-1");
},
{
  offset: '70%'
});
$("#orizontal-line-2-mobile").waypoint(function(){
$("#orizontal-line-2-mobile hr").addClass("opacity-1");
},
{
offset: '70%'
});
$("#orizontal-line-3-mobile").waypoint(function(){
$("#orizontal-line-3-mobile hr").addClass("opacity-1");
},
{
offset: '70%'
});
  $("#timeline #box-02").waypoint(function(){
  $("#vertical-line hr").addClass("hr2");
},
  {
    offset: '80%'
  });
  $("#timeline #box-02-mobile").waypoint(function(){
  $("#vertical-line hr").addClass("hr2m");
},
  {
    offset: '80%'
  });
$("#timeline #box-03").waypoint(function(){
$("#vertical-line hr").addClass("hr3");
},
{
  offset: '80%'
});
$("#timeline #box-04").waypoint(function(){
$("#vertical-line hr").addClass("hr4");
},
{
  offset: '80%'
});
$("#timeline #box-04-mobile").waypoint(function(){
$("#vertical-line hr").addClass("hr4m");
},
{
  offset: '80%'
});
$("#timeline #box-05").waypoint(function(){
$("#vertical-line hr").addClass("hr5");
},
{
  offset: '80%'
});
$("#timeline #box-06").waypoint(function(){
$("#vertical-line hr").addClass("hr6");
},
{
  offset: '80%'
});
$("#timeline #box-06-mobile").waypoint(function(){
$("#vertical-line hr").addClass("hr6m");
},
{
  offset: '80%'
});
$("#timeline #box-07").waypoint(function(){
$("#vertical-line hr").addClass("hr7");
},
{
  offset: '80%'
});
  $("#box-01 .icon-timeline").waypoint(function(){
  $("#box-01 .icon-timeline").addClass("animation-icon");
},
	{
		offset: '110%'
  });
  $("#box-01 .icon-timeline").waypoint(function(){
  $("#box-01 .text-icon-right").addClass("enter-left-right");
},
  {
    offset: '80%'
  });
  $("#box-02").waypoint(function(){
  $("#box-02 .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-02").waypoint(function(){
  $("#box-02 .text-icon-left").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-02-mobile").waypoint(function(){
  $("#box-02-mobile .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-02-mobile").waypoint(function(){
  $("#box-02-mobile .text-icon-left").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-03").waypoint(function(){
  $("#box-03 .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-03").waypoint(function(){
  $("#box-03 .text-icon-right").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-04").waypoint(function(){
    $("#box-04 .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-04").waypoint(function(){
    $("#box-04 .text-icon-left").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-04-mobile").waypoint(function(){
    $("#box-04-mobile .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-04-mobile").waypoint(function(){
    $("#box-04-mobile .text-icon-left").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-05").waypoint(function(){
  $("#box-05 .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-05").waypoint(function(){
  $("#box-05 .text-icon-right").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-06").waypoint(function(){
    $("#box-06 .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-06").waypoint(function(){
    $("#box-06 .text-icon-left").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-06-mobile").waypoint(function(){
    $("#box-06-mobile .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-06-mobile").waypoint(function(){
      $("#box-06-mobile .text-icon-left").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  $("#box-07").waypoint(function(){
  $("#box-07 .icon-timeline").addClass("animation-icon");
},
  {
    offset: '80%'
  });
  $("#box-07").waypoint(function(){
  $("#box-07 .text-icon-right").addClass("enter-left-right");
},
  {
    offset: '65%'
  });
  // Section Why
$("#why .box-content-2").waypoint(function(){
$(".box-content-2").addClass("enter-left-right");
},
{
  offset: '50%'
});
$("#why .box-content-3").waypoint(function(){
$(".box-content-3").addClass("enter-left-right");
},
{
  offset: '50%'
});
  // Section Skills
  $("#ux-01").waypoint(function(){
  $("#ux-01 .box-content-5").addClass("enter-left-right");
},
	{
		offset: '90%'
  });
  $("#ux-01").waypoint(function(){
  $("#ux-01 .img-section img").addClass("enter-left-right");
},
	{
		offset: '50%'
  });
  $("#ux-02").waypoint(function(){
  $("#ux-02 .box-content-5").addClass("enter-left-right");
},
  {
    offset: '90%'
  });
  $("#ux-02").waypoint(function(){
  $("#ux-02 .img-section img").addClass("enter-left-right");
},
  {
    offset: '50%'
  });
  $("#ux-03").waypoint(function(){
  $("#ux-03 .box-content-5").addClass("enter-left-right");
},
  {
    offset: '90%'
  });
  $("#ux-03").waypoint(function(){
  $("#ux-03 .img-section img").addClass("enter-left-right");
},
  {
    offset: '50%'
  });
  $("#ux-04").waypoint(function(){
  $("#ux-04 .box-content-5").addClass("enter-left-right");
},
  {
    offset: '90%'
  });
  $("#ux-04 .img-section").waypoint(function(){
  $("#ux-04 .img-section img").addClass("enter-left-right");
},
  {
    offset: '50%'
  });
  $("#why #box-01 .cinquanta-1").waypoint(function(){
  $("#why #box-01 .cinquanta-1").addClass("enter-left-right");
  },
  {
    offset: '80%'
  });
  $("#why #box-01 .cinquanta-2").waypoint(function(){
  $("#why #box-01 .cinquanta-2").addClass("enter-left-right");
  },
  {
    offset: '80%'
  });
  $("#why #box-02 .cinquanta-1").waypoint(function(){
  $("#why #box-02 .cinquanta-1").addClass("enter-left-right");
  },
  {
    offset: '80%'
  });
  $("#why #box-02 .cinquanta-2").waypoint(function(){
  $("#why #box-02 .cinquanta-2").addClass("enter-left-right");
  },
  {
    offset: '80%'
  });
  $("#why #box-03 .cinquanta-1").waypoint(function(){
  $("#why #box-03 .cinquanta-1").addClass("enter-left-right");
  },
  {
    offset: '80%'
  });
  $("#why #box-03 .cinquanta-2").waypoint(function(){
  $("#why #box-03 .cinquanta-2").addClass("enter-left-right");
  },
  {
    offset: '80%'
  });
});
