var sliderint = 1;
var sliderNext = 2;

$(document).ready(function() {
  $('#slider >img#1').fadeIn(300);
  startSlider();
});

function startSlider() {
  //get the number of images
  var count = $('#slider > img').size();
  
  //autoloop through available images
  var loop = setInterval(function() {
    
    //if sliderNext is greater than # images then reset to 1
    if (sliderNext > count) {
      sliderNext = 1;
      sliderInt = 1;
      
    }
    //fadeOut all images
    $('#slider > img').fadeOut(300);
    
    //fadeIn next image based on id
    $('#slider > img#' + sliderNext).fadeIn(300);
    
    //update counter variables to keep track of looping
    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
  }, 3000)
}