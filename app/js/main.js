$(function(){

   $('.star').rateYo({
    starWidth: "10px",
    ratedFill: "#ffcc00"
  });

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        postfix: ".00",
        prefix: "$",
    });


  $('.main-slider__wrapper').slick({
    dots:true,
    arrows:false,
  });

   var mixer = mixitup('.products__items');
   
   var mixer = mixitup('.design__items');


});







