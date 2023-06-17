$(document).ready(function() {
    $('.button').on('click', function() {
      $('.overlay').removeClass('is-hidden');
    });
  
    $('.overlay').on('click', function() {
      $(this).addClass('is-hidden');
    });
  });