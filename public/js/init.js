(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

$(document).ready(function () {

  'use strict';

   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });

});

const flowGallery = new FlowGallery();


//increment/decrement for z index
document.getElementByClassName("overlay").onmouseover = function() {zIndex()};

function zIndex() {
  document.getElementByClassName("overlay").style.zIndex = "2";
}

function mouseOverIncrement() {
      if (document.getElementByClassName("overlay").onmouseover) {

      }
  }
}
