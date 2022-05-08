// popup

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var out = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

out.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// animation

// функция добавляет CSS-класс, который и осуществляет анимацию
const scrollImations = (entries, observer) => {
  entries.forEach((entry) => {
    // анимируем, если элемент целиком попадает в отслеживаемую область
    if(entry.isIntersecting && entry.intersectionRatio == 1) {
      entry.target.classList.add('media-animation');
    } else {
      entry.target.classList.remove('media-animation');
    }
  });
}

// создаём обсервер с параметрами
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(scrollImations, options);

const boxes = document.querySelectorAll('.media');
boxes.forEach((media) => {
  observer.observe(media);
});