

var qw = $("#pop1").change(function(){
    var tn = $(this).val();
    $("."+tn).addClass("on").siblings("ul").removeClass("on");
    
});


$(".popbtns").click(function(){
    $(".침대").stop().animate({"left":"-300px"},500,function(){
          $(this).append($(".침대 li:first-child")).css({"left":"0"});
      });

   });

   $(".popbtns").click(function(){
    $(".의자").stop().animate({"left":"-300px"},500,function(){
          $(this).append($(".의자 li:first-child")).css({"left":"0"});
      });
   });