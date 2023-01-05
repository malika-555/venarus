"use strict";

// burger

const iconMenu = document.querySelector(".icon__menu");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  const headBtn = document.querySelector(".header__button");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    headBtn.classList.toggle("_active");


  });
}


// перезагрузка при изменении размера экрана

// window.addEventListener("resize", setScreenSize);

// function setScreenSize() {
//   window.location.reload(true);
// }


// lid animation1

const rightButton = document.querySelector('.next');
const leftButton = document.querySelector('.prev');


if (document.documentElement.clientWidth > 960) {

  const figura = document.querySelector('.lid__images');
  let switchCount = 0;

  rightButton.addEventListener('click', switchRight);
  leftButton.addEventListener('click', switchLeft);

  function switchRight() {
    if (switchCount === 3) switchCount = 0;

    if (switchCount === 0) {
      figura.className = 'lid__images';
      figura.classList.add('_active1');
    }
    if (switchCount === 1) {
      figura.className = 'lid__images';
      figura.classList.add('_active2');
    }
    if (switchCount === 2) {
      figura.className = 'lid__images';
      figura.classList.add('_active3');
    }
    switchCount++;
  }

  function switchLeft() {
    if (switchCount === -1) switchCount = 2;
    if (switchCount === 0) {
      figura.className = 'lid__images';
      figura.classList.add('_active30');
    }
    if (switchCount === 1) {
      figura.className = 'lid__images';
      figura.classList.add('_active10');
    }
    if (switchCount === 2) {
      figura.className = 'lid__images';
      figura.classList.add('_active20');
    }
    switchCount--;
  }

}

// ---lid animation2

if (document.documentElement.clientWidth <= 960) {
  let f1 = document.querySelector('.lid__image_one');
  let f2 = document.querySelector('.lid__image_two');
  let f3 = document.querySelector('.lid__image_three');

  let switchCount1 = 0;
  rightButton.addEventListener('click', flipRight);
  leftButton.addEventListener('click', flipLeft);

  function flipRight() {
    if (switchCount1 === 3) {
      switchCount1 = 0;
    }

    if (switchCount1 === 0) {
      f3.classList.add('active1');
      f2.style.display = 'block';
      f1.classList.remove('active3', 'active30');
      f1.style.display = 'none';
    }
    if (switchCount1 === 1) {
      f2.classList.add('active2');
      f3.classList.remove('active1', 'active10');
      f3.style.display = 'none';
      f1.style.display = 'block';
    }
    if (switchCount1 === 2) {
      f1.classList.add('active3');
      f3.style.display = 'block';
      f2.classList.remove('active2', 'active20');
      f2.style.display = 'none';
    }

    switchCount1++;
  }

  function flipLeft() {
    if (switchCount1 === 3) {
      switchCount1 = 0;
    }
    if (switchCount1 === 0) {
      f3.classList.add('active10');
      f2.style.display = 'block';
      f1.classList.remove('active3', 'active30');
      f1.style.display = 'none';
    }
    if (switchCount1 === 1) {
      f2.classList.add('active20');
      f3.classList.remove('active1', 'active10');
      f3.style.display = 'none';
      f1.style.display = 'block';
    }
    if (switchCount1 === 2) {
      f1.classList.add('active30');
      f3.style.display = 'block';
      f2.classList.remove('active2', 'active20');
      f2.style.display = 'none';
    }
    switchCount1++;
  }
}


// disclaimer
const discClose = document.querySelector(".disclaimer__close");
if (iconMenu) {
  const disc = document.querySelector(".lid__disclaimer");

  discClose.addEventListener("click", function (e) {
    disc.classList.add("_active");

  });
}



// slider
let slideIndex = 0;
let dotIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider__preview");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";

  let dot = document.getElementsByClassName("slider__dot");
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("_active");
  }

  dotIndex++;
  if (dotIndex > dot.length) { dotIndex = 1; }
  dot[dotIndex - 1].classList.add("_active");

  let timer = setTimeout(showSlides, 2000);

  let slidesWrapper = document.querySelector(".slider");

  slidesWrapper.onmouseover = () => clearInterval(timer);

  slidesWrapper.onmouseout = () => timer = setTimeout(showSlides, 2000);
}


// popup

const modal = document.querySelectorAll('.modal');
const slidersClick = document.querySelectorAll('.slider__preview');
const closeBtn = document.querySelectorAll('.close');

const closeModal = () => {
  modal.forEach((el) => {
    el.style.display = 'none';
    document.body.classList.remove('_lock');
  });
};

const showModal = (i) => {
  modal.forEach((el, elIndex) => {
    if (i === elIndex) {
      el.style.display = 'block';
      document.body.classList.add('_lock');
    }
  });
};

window.addEventListener('click', (e) => {
  if (e.target === modal[0] || e.target === modal[1] || e.target === modal[2]) {
    closeModal();
  }
});

slidersClick.forEach((el, i) => {
  el.addEventListener('click', () => {
    showModal(i);
  });
});

closeBtn.forEach((el) => {
  el.addEventListener('click', closeModal);
});

