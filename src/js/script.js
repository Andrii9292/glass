//-----------при нажатии на маленькое изображение рядом открывается большое--------------------------------//
const thumbnails = document.querySelectorAll('.trend__thumbnails img');
const preview = document.querySelector('.trend__preview img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        preview.src = thumbnail.src;
    });
});

//--------------------слайдер+счетчик который посчитывает какой слайд включен и общще количество(4/12напр.)-------------------//
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

//-----------------------------для изменения названия города в шапке----------------------------------//
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

//-----скрываем подменю если курсор не на нем и даем пол секунды чтобы перевести курсор на подменю------------------------------------------------------------------//
const headerList1 = document.querySelector('.header__list-1');
const submenu = headerList1.querySelector('.submenu');

let timerId;

function showSubmenu() {
    clearTimeout(timerId);
    submenu.style.display = 'block';
}

function hideSubmenu() {
    timerId = setTimeout(() => {
        submenu.style.display = 'none';
    }, 500);
}

headerList1.addEventListener('mouseenter', showSubmenu);
headerList1.addEventListener('mouseleave', hideSubmenu);
submenu.addEventListener('mouseenter', () => {
    clearTimeout(timerId);
});
submenu.addEventListener('mouseleave', hideSubmenu);

//-----------------баннер обратный звонок-----------------------------------//
const callLink = document.querySelector('.call-link');
const callContainer = document.querySelector('.call-container');
const callClose = document.querySelector('.call-close');
const overlay = document.querySelector('.overlay');

callLink.addEventListener('click', () => {
    callContainer.style.display = 'block';
    overlay.style.display = 'block';
});

callClose.addEventListener('click', () => {
    callContainer.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    callContainer.style.display = 'none';
    overlay.style.display = 'none';
});
//-------------slik for certificates__card-wrapper--------------------------//
$(document).ready(function () {
    $('.certificates__card-wrapper').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<img src="../images/prev-arrow.svg" class="certificates__card-prev" alt="Previous">',
        nextArrow: '<img src="../images/next-arrow.svg" class="certificates__card-next" alt="Next">',
    });
});
//-------------slik for clients__card-wrapper--------------------------//
$(document).ready(function () {
    $('.clients__card-wrapper').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: false,
        prevArrow: '<img src="../images/prev-arrow.svg" class="clients__card-prev" alt="Previous">',
        nextArrow: '<img src="../images/next-arrow.svg" class="clients__card-next" alt="Next">',
    });
});
//-------------slik for quality__card-wrapper-2--------------------------//
$(document).ready(function () {
    $('.quality__card-wrapper-2').slick({
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: false,
        prevArrow: '<img src="../images/prev-arrow.svg" class="clients__card-prev" alt="Previous">',
        nextArrow: '<img src="../images/next-arrow.svg" class="clients__card-next" alt="Next">',
    });
});