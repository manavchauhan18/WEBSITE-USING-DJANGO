$(document).ready(function() {
    $('.project-slider').slick({
        infinite: false,
        speed: 120,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
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

var title = document.getElementById('projectname');
var link = document.getElementById('projectlink');
var image = document.getElementById('projectimage');

var slideIndex = 6;
$('.js-add-slide').on('click', function() {
    slideIndex++;
    $('.project-slider').slick('slickAdd', '<div class="project-card" id="projectcard"><div class="project-image d-flex justify-content-center align-items-center pb-2 pt-2"><img src="../../../static/images/project 1.jpg" alt=""></div><hr><div><h3><a class="text-center text-decoration-none" href="https://github.com/manavchauhan18/WEBSITE-USING-DJANGO">Website Using Django</a></h3></div></div>' )
})