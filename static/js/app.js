$(document).ready(function() {
    $('.project-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $('.nav-trigger').click(function(){
        $('.site-content-wrapper').toggleClass('scaled');
     })
})