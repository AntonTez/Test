const items = document.querySelectorAll('.slider__item');
const sliderTrack = document.querySelector('.slider__track');
let count = 0;
let width;
document.querySelector('.slider__last-num').innerHTML = `${items.length}`;

function init() {
    width = document.querySelector('.slider__container').offsetWidth;
    sliderTrack.style.width = width * items.length + 'px';
    items.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__btn--next').addEventListener('click', function () {
    count++;
    if (count >= items.length) {
        count = 0;
    }
	 document.querySelector('.slider__count-num').innerHTML = `${count+1}`;
    rollSlider();
});

document.querySelector('.slider__btn--prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = items.length - 1;
    }
	 document.querySelector('.slider__count-num').innerHTML = `${count+1}`;
    rollSlider();
});

function rollSlider() {
	sliderTrack.style.transform = 'translate(-' + count * width + 'px)';

}