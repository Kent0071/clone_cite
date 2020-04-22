'use strict';

$(document).ready(function(){

  $('.header__burger').click(function(event){
    $('.header__burger, .header__nav').toggleClass('active');
    $('body').toggleClass('lock');
});

    $('.reviews__row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: false,
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
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
  });
//пробую настроить слайдер под dots
//   $('.first-screen__dots').slick({
//     arrows: false,
//     dots: false,
//     responsive: [
//         {
//           breakpoint: 1440,
//           settings: "unslick", 
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             arrows: false,
//             autoplay: false,
//             autoplaySpeed: 1000,
//           }
//         }
//       ]
// });
  });

