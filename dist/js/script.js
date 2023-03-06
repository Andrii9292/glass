const thumbnails = document.querySelectorAll('.trend__thumbnails img');
const preview = document.querySelector('.trend__preview img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        preview.src = thumbnail.src;
    });
});
//--------------------слайдер-------------------//
$(document).ready(function () {
    var $slider = $('.unique__card-wrapper');
    var $counter = $('.counter');

    $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $counter.text(i + '/' + slick.slideCount);
    });

    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="slick-prev" src="../images/prev-arrow.svg">',
        nextArrow: '<img class="slick-next" src="../images/next-arrow.svg">',
        infinite: true,
        dots: false
    });
});


