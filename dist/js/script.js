const thumbnails = document.querySelectorAll('.trend__thumbnails img');
const preview = document.querySelector('.trend__preview img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        preview.src = thumbnail.src;
    });
});
