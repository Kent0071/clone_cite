'use strict';

$(document).ready(function(){
    $('.reviews__row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 775,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    });

    
      $('.about__row').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 775,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
    });

    $('.description__slider-row').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
          {
            breakpoint: 775,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
  });
  });

