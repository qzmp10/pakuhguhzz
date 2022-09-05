const imageSlider = (function () {
  const slider = document.querySelector('.slider');
  const frame = document.querySelector('.frame');
  const arrows = document.querySelectorAll('.arrow');
  const arrow1 = document.querySelector('.arrow1');
  const arrow2 = document.querySelector('.arrow2');
  const images = document.querySelectorAll('.image');
  const image1 = document.querySelector('.img1');
  const image2 = document.querySelector('.img2');
  const image3 = document.querySelector('.img3');
  const dots = document.querySelectorAll('.dot');
  const dot1 = document.querySelector('.dot1');
  const dot2 = document.querySelector('.dot2');
  const dot3 = document.querySelector('.dot3');

  function setDot() {
    for (const image of images) {
      if (image.hasAttribute('data-active')) {
        for (const dot of dots) {
          if (dot.classList[2] == image.classList[2]) {
            dot.setAttribute('data-active', '');
          } else {
            dot.removeAttribute('data-active');
          }
        }
        break;
      }
    }
  }

  setDot();

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      for (const dot of dots) {
        dot.removeAttribute('data-active');
      }
      dot.setAttribute('data-active', '');
      for (const image of images) {
        if (image.classList[2] == dot.classList[2]) {
          image.setAttribute('data-active', '');
        } else {
          image.removeAttribute('data-active');
        }
      }
    });
  });

  arrow1.addEventListener('click', () => {
    for (const image of images) {
      if (image.hasAttribute('data-active')) {
        image.removeAttribute('data-active');
        if (image.previousElementSibling == null) {
          frame.lastElementChild.setAttribute('data-active', '');
          setDot();
        } else if (image.previousElementSibling != null) {
          image.previousElementSibling.setAttribute('data-active', '');
          setDot();
        }
        break;
      }
    }
  });

  arrow2.addEventListener('click', () => {
    for (const image of images) {
      if (image.hasAttribute('data-active')) {
        image.removeAttribute('data-active');
        if (image.nextElementSibling == null) {
          frame.firstElementChild.setAttribute('data-active', '');
          setDot();
        } else if (image.nextElementSibling != null) {
          image.nextElementSibling.setAttribute('data-active', '');
          setDot();
        }
        break;
      }
    }
  });

  function changeImage() {
    for (const image of images) {
      if (image.hasAttribute('data-active')) {
        image.removeAttribute('data-active');
        if (image.nextElementSibling == null) {
          frame.firstElementChild.setAttribute('data-active', '');
          setDot();
        } else if (image.nextElementSibling != null) {
          image.nextElementSibling.setAttribute('data-active', '');
          setDot();
        }
        break;
      }
    }
  }

  setInterval(changeImage, 10000);

  return {
    slider,
    frame,
    arrows,
    arrow1,
    arrow2,
    images,
    image1,
    image2,
    image3,
    dots,
    dot1,
    dot2,
    dot3,
    setDot,
  };
}());
