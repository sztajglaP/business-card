const image = document.querySelector('.image');

const showImage = () => {
    image.classList.add('active');
}

window.addEventListener('load', showImage);