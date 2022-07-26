$(document).ready(function(){
    $('.active').animate({opacity: "1"});

    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
      var dots = $(".dot");

      if(nextImg.length){
        nextImg.addClass('active').animate({opacity: "1"});;
        currentImg.removeClass('active').animate({opacity: "0.6"});
      }else{
        nextImg = $(".slider-inner img").first();
        nextImg.addClass('active').animate({opacity: "1"});
        currentImg.removeClass('active').animate({opacity: "0.6"});
      }

        var i = nextImg.index();
        dots.className = dots.attr('class','dot');
        var currentDot = $(".slide-dot .dot:eq("+i+")");
        currentDot.addClass('active-dot');
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
      var dots = $(".dot");

      if(prevImg.length){
        prevImg.addClass('active').animate({opacity: "1"});
        currentImg.removeClass('active').animate({opacity: "0.6"});
      }else{
        prevImg = $(".slider-inner img").last();
        prevImg.addClass('active').animate({opacity: "1"});
        currentImg.removeClass('active').animate({opacity: "0.6"});
      }

      var i = prevImg.index();
      dots.className = dots.attr('class','dot');
      var currentDot = $(".slide-dot .dot:eq("+i+")");
      currentDot.addClass('active-dot');
    });

  });

function dotChange(n){
    var currentImg = $('.active');
    var targetImg;
    var dots = $(".dot");
    n=n-1;

    targetImg = $(".slider-inner img:eq("+n+")");
    currentImg.removeClass('active').animate({opacity: "0.6"});
    targetImg.addClass('active').animate({opacity: "1"});

    dots.className = dots.attr('class','dot');
    var currentDot = $(".slide-dot .dot:eq("+n+")");
    currentDot.addClass('active-dot');
}