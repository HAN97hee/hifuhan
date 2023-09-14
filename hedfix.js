
var bw = $("body").width();
    $(window).resize(function(){
        bw = $("body").width();
    }); //윈도우창의 사이즈를 계속 구해서 그 상황에 맞는 스크립트를 실행함 연속적으로
    


    $(".gnb").on("mouseover focusin",function(){
      if(bw>800){
          $(".heddown").stop().slideDown(1000);
      }
  });
  
  $(".hed").on("mouseleave focusin",function(){
      if(bw>800){
          $(".heddown").stop().slideUp(1000);
      }
  });
  




//헤더 스크롤탑 스크립트
let header = document.querySelector(".hed");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= 148) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};
