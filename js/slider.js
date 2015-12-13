var sliderint = 1;
var sliderNext = 2;

$(document).ready(function() {
  $('#slider >img#1').fadeIn(300);
  startSlider();
});

function startSlider() {
  //get the number of images
  var count = $('#slider > img').size();
  var loop = setInterval(function() {
    $('#slider > img').fadeOut(300);
    $('#slider > img#' + sliderNext).fadeIn(300);
    
    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
  }, 3000)
}