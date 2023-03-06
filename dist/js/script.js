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

//---------------------------------------------------------------//
const cityLink = document.getElementById("city-link");
const cityName = document.getElementById("city-name");

// Функция для изменения названия города
function changeCity(city) {
    cityName.textContent = city;
}

// Обработчик клика по ссылке на город
cityLink.addEventListener("click", function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    const newCity = prompt("Введите новый город"); // Запрашиваем у пользователя новый город
    if (newCity) { // Если пользователь ввел название города, то меняем его в баннере
        changeCity(newCity);
        cityLink.href = `/${newCity}`; // Изменяем ссылку на город, например: "/Москва"
    }
});