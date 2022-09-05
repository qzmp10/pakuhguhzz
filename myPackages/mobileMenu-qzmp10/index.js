const mobileMenu = (function () {
const options = document.querySelectorAll('.option');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const texts = document.querySelectorAll('.text');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');
const icons = document.querySelectorAll('.icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const image4 = document.querySelector('#image4');

options.forEach(option => {
    option.addEventListener('touchend', () => {
        option.classList.add('scale');
    });

    option.addEventListener('transitionend', () => {
        option.classList.add('scale-2');
        option.classList.remove('scale-2');
        option.classList.remove('scale');
    });
});

return { options, option1, option2, option3, option4,
texts, text1, text2, text3, text4, icons, image1, image2, image3, image4, menuHTML }

})();

