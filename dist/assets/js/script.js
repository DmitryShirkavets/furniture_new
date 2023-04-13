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
    e.className = e.className.split(" active")[0];
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

// function scrollFroze(e) {
//   let element = document.querySelector('.product__measure-btn')
//   let attr = element.getAttribute('href')
//   let destination = attr.offset().top

//   document.getElementsByTagName('body').animate({ scrollTop: destination }, 1400);
// }
// $(document).ready(function () {
//   $(".product__measure-btn").click(function () {
//     // 1
//   });
// });

ymaps.ready(function () {
  // Создание экземпляра карты и его привязка к созданному контейнеру.
  var myMap = new ymaps.Map('map', {
          center: [48.702269, 44.500922],
          zoom: 16,
          // behaviors: ['default']
          controls: []
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создание макета балуна на основе Twitter Bootstrap.
      MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
          '<div class="popover top">' +
              '</div>', {
              /**
               * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
               * @function
               * @name build
               */
              build: function () {
                  this.constructor.superclass.build.call(this);

                  this._$element = $('.popover', this.getParentElement());

                  this.applyElementOffset();

                  this._$element.find('.close')
                      .on('click', $.proxy(this.onCloseClick, this));
              },

              /**
               * Удаляет содержимое макета из DOM.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
               * @function
               * @name clear
               */
              clear: function () {
                  this._$element.find('.close')
                      .off('click');

                  this.constructor.superclass.clear.call(this);
              },

              /**
               * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name onSublayoutSizeChange
               */
              onSublayoutSizeChange: function () {
                  MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                  if(!this._isElement(this._$element)) {
                      return;
                  }

                  this.applyElementOffset();

                  this.events.fire('shapechange');
              },

              /**
               * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
               * @function
               * @name applyElementOffset
               */
              applyElementOffset: function () {
                  this._$element.css({
                      left: -(this._$element[0].offsetWidth / 2),
                      top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                  });
              },

              /**
               * Используется для автопозиционирования (balloonAutoPan).
               * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
               * @function
               * @name getClientBounds
               * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
               */
              getShape: function () {
                  if(!this._isElement(this._$element)) {
                      return MyBalloonLayout.superclass.getShape.call(this);
                  }

                  var position = this._$element.position();

                  return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                      [position.left, position.top], [
                          position.left + this._$element[0].offsetWidth,
                          position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                      ]
                  ]));
              },

              /**
               * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
               * @function
               * @private
               * @name _isElement
               * @param {jQuery} [element] Элемент.
               * @returns {Boolean} Флаг наличия.
               */
              _isElement: function (element) {
                  return element && element[0] && element.find('.arrow')[0];
              }
          }),

      // Создание метки с пользовательским макетом балуна.
      myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          // balloonHeader: 'Заголовок балуна',
          // balloonContent: 'Контент балуна'
      }, {
          balloonShadow: false,
          // balloonLayout: MyBalloonLayout,
          // balloonContentLayout: MyBalloonContentLayout,
          balloonPanelMaxMapArea: 0
          // Не скрываем иконку при открытом балуне.
          // hideIconOnBalloonOpen: false,
          // И дополнительно смещаем балун, для открытия над иконкой.
          // balloonOffset: [3, -40]
      });

  myMap.geoObjects.add(myPlacemark);
});







if (document.getElementById("phone") !== undefined) {
  let phone = document.getElementById("phone");

  let maskOptions = {
    mask: "+7(000)000-00-00",
    lazy: false,
  };
  let mask = new IMask(phone, maskOptions);
}

if (document.getElementById("email") !== undefined) {
  let element2 = document.getElementById("email");
  let maskOptions2 = {
    mask: function (value) {
      if (/^[a-z0-9_\.-]+$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
        return true;
      return false;
    },
    lazy: false,
  };
  let mask2 = new IMask(element2, maskOptions2);
}

if (document.querySelector(".select-choices") !== undefined) {
  const choiceElement = document.querySelector(".select-choices");

  const choices = new Choices(choiceElement, {
    searchEnabled: false,
    itemSelectText: "",
  });
}


//# sourceMappingURL=script.js.map
