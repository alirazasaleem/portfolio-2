$(document).ready(function() {
  // jQuery Run on Loading
  $('#navbar ul').addClass('navbar-right');
  $('header,section').css('min-height', '' + $(window).height() + 'px');
  $('#preview-img img').css('max-height', ($(window).height() - 20) + 'px');
  // PortFolio Gallery
  $('.image-gallery img').click(function(event) {
    $('#preview-img img').attr('src', $(this).attr('src'));
    $('#preview-img').slideDown('slow');
  });

  // Animate Navbar
  $('.nav.navbar-nav a').animateScroll({
    speed:1000
  });
});
