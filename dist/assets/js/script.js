function test(a, b) {
    return a + b
}

function settingsShow() {
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".sidebar__back").classList.toggle("active");
  document.querySelector(".sidebar").classList.toggle("active");
}

function settingsHidden() {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".sidebar__back").classList.toggle("active");
  document.querySelector(".sidebar").classList.toggle("active");
}

// document.querySelector('.catalog__setting').addEventListener('click', )

function priceShow() {
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".price").classList.toggle("active");
}

function priceHidden() {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".price").classList.toggle("active");
}

// document
//   .querySelector(".price__button-close")
//   .addEventListener("click", function () {
//     document.querySelector("body").style.overflow = "visible";
//     document.querySelector(".price").classList.toggle("active");
//   });

// document.querySelector('.menu__list-link').addEventListener('mouseout', function(){
//   document.querySelector('.menu__dropdown').classList.toggle('active')
// })

document.querySelector(".hamburger-box").addEventListener("click", function () {
  document.querySelector(".menu__mobile").classList.toggle("active");
  document.querySelector("body").style.overflow = "hidden";
});

document
  .querySelector(".hamburger-box-x")
  .addEventListener("click", function () {
    document.querySelector(".menu__mobile").classList.toggle("active");
    document.querySelector("body").style.overflow = "auto";
  });

var swiper = new Swiper(".main__swiper", {
  cssMode: true,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".main__swiper-button-next",
    prevEl: ".main__swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".interior-doors__swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  freeMode: true,
  navigation: {
    nextEl: ".interior-doors__next",
    prevEl: ".interior-doors__prev",
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
    },
    970: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".input-doors__swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  freeMode: true,
  navigation: {
    nextEl: ".input__doors-next",
    prevEl: ".input__doors-prev",
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
    },
    970: {
      slidesPerView: 3,
    },
    // 1280: {
    //   slidesPerView: 4,
    // },
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".gallery__swiper", {
  slidesPerView: 1,
  // spaceBetween: 16,
  freeMode: true,
  // navigation: {
  //   nextEl: ".input__doors-next",
  //   prevEl: ".input__doors-prev",
  // },
  // breakpoints: {
  //   750: {
  //     slidesPerView: 2,
  //   },
  //   970: {
  //     slidesPerView: 3,
  //   },
  //   // 1280: {
  //   //   slidesPerView: 4,
  //   // },
  // },
  pagination: {
    el: ".gallery__pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".reviews__swiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  // loop: true,
  // centeredSlides: true,

  breakpoints: {
    850: {
      slidesPerView: 2,
      spaceBetween: 28,
      navigation: {
        nextEl: ".reviews__button-next",
        prevEl: ".reviews__button-prev",
      },
    },
    // 1280: {
    //   slidesPerView: 4,
    // },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

var swiper = new Swiper(".brands__swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  // centeredSlides: true,
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 3,
      spaceBetween: 18,
      navigation: {
        nextEl: ".brands__button-next",
        prevEl: ".brands__button-prev",
      },
    },
    1220: {
      slidesPerView: 4,
      navigation: {
        nextEl: ".brands__button-next",
        prevEl: ".brands__button-prev",
      },
    },
    1350: {
      slidesPerView: 5,
      navigation: {
        nextEl: ".brands__button-next",
        prevEl: ".brands__button-prev",
      },
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

// const check = ( param ) => ( e ) => {

// }

function check(e) {
  console.log(e.className);
  if (!e.className.includes("active")) {
    e.className += " active";
  } else {
    e.className = e.className.split(' active')[0];
  }
  // e.currentTarget.classList.toggle('active')
}
// let btns = document.getElementsByClassName("btn--material");

// // Проходим по кнопкам и добавляем активный класс к текущей/нажатой кнопке
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");

//     // Если активного класса нет
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Добавляем активный класс к текущей/нажатой кнопке
//     this.className += " active";
//   });
// }

// document
//   .querySelector(".sidebar__back-button")
//   .addEventListener("click", function () {
//     document.querySelector(".catalog__setting").classList.toggle("active");
//     document.querySelector(".sidebar").classList.toggle("active");
//   });

// document
//   .querySelector(".catalog__setting")
//   .addEventListener("click", function () {
//     document.querySelector(".catalog__setting").classList.toggle("active");
//     document.querySelector(".sidebar").classList.toggle("active");
//   });

// var myMap;

// // Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);

// function init () {
//     // Создание экземпляра карты и его привязка к контейнеру с
//     // заданным id ("map").
//     myMap = new ymaps.Map('map', {
//         // При инициализации карты обязательно нужно указать
//         // её центр и коэффициент масштабирования.
//         center:[55.76, 37.64], // Москва
//         zoom:10
//     });

//     // document.getElementById('destroyButton').onclick = function () {
//     //     // Для уничтожения используется метод destroy.
//     //     myMap.destroy();
//     // };

// }

//# sourceMappingURL=script.js.map
