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
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
  });

    $('.first-screen__dots').slick({
    arrows: false,
    dots: false,
    responsive: [
        {
          breakpoint: 9999,
          settings: "unslick", 
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      ]
    });

    $('.poster__row-first-page').slick({
      arrows: false,
      dots: false,
      responsive: [
          {
            breakpoint: 9999,
            settings: "unslick", 
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
            }
          }
        ]
    });
    

    $('.courses__row').slick({
      arrows: false,
      dots: false,
      responsive: [
          {
            breakpoint: 9999,
            settings: "unslick", 
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000
            }
          }
        ]
    });
    
  });

