/*var n = 0;
function auto(){
    n++;
    if(n >= 7){
        $(".saleslide").animate({"left":-430*n},300,function(){
            $(".saleslide").css({"left":0});
            $(this).append($(".saleslide li:first-child")).css({"left":"0"})
        });
        n = 0;
    }
    else{
        $(".saleslide").animate({"left":-430*n},300);
    }
    $(".saleslide li").removeClass();
    $(".saleslide li").eq(n+1).addClass("select");
}

var timer = setInterval("auto()",5000);

$(".saleimg").hover(
    function(){
        clearInterval(timer)
    },
    function(){
        timer = setInterval("auto()",5000)
    }
);


$(".next").click(function(){
    auto();
});

$(".prev").click(function(){
    n--;
    if(n < 0){
        n = 6;
        $(".saleslide").css({"left":-430*(n-1)}).animate({"left":-430*n});
    }
    else{
        $(".saleslide").animate({"left":-430*n},300);
    }
    $(".saleslide li").removeClass();
    $(".saleslide li").eq(n+1).addClass("select");
});
*/





$(".next").click(function(){
    $(".saleslide").animate({"left":"-430px"},500,function(){
        $(this).append($(".saleslide li:first-child")).css({"left":"0"});
    });
    $(".saleslide li").removeClass();
    $(".saleslide li:nth-child(3)").addClass("select");
});

$(".prev").click(function(){
    $(".saleslide").css({"left":"-430px"}).prepend($(".saleslide li:last-child")).animate({"left":"0"},500)
    $(".saleslide li").removeClass();
    $(".saleslide li:nth-child(2)").addClass("select");
});
    














