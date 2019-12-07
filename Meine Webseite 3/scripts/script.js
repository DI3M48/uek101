/*Quellenangabe-Slide: ük101*/
$("#barcontainer").click(function(){
    $(this).toggleClass("change");
    $("#responsivenav").toggleClass("responsive") 
});





/*Quellenangabe-Slide: https://vike.io/de/201360/*/ 
$(function(){

    $('.gallery1').each(function() {
      var $gal     = $(this),
          $movable = $(".movable", $gal), 
          $slides  = $(">*", $movable),
          N        = $slides.length,
          C        = 0,
          itv      = null;
      function play() { itv = setInterval(anim, 3000); }
      function stop() { clearInterval(itv); }
      function anim() {
        C = ($(this).is(".prev") ? --C : ++C) <0 ? N-1 : C%N;
        $movable.css({transform: "translateX(-"+ (C*100) +"%)"});
      }
      $(".prev, .next", this).on("click", anim);
      $gal.hover(stop, play);
      play();
    }); 
  });
  