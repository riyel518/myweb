$(document).ready(function(){

  $(window).scroll(function () {
           // set distance user needs to scroll before we fadeIn navbar
    if ($(this).scrollTop() > 50) {
      $("nav").addClass("fixed-nav-bar");
    }

    });
