$('.js-remove-slide').on('click', function() {
    $('.slider-info').slick('slickRemove',slideIndex - 1);
    if (slideIndex !== 0){
      slideIndex--;
    }
});