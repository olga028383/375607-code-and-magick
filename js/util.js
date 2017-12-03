'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (event, action, hideClass, element) {
      if (event.keyCode === ESC_KEYCODE) {
        action(element, hideClass);
      }
    },
    isEnterEvent: function (event, action, hideClass, element) {
      if (event.keyCode === ENTER_KEYCODE) {
        action(element, hideClass);
      }
    },
    showElement: function (element, hideClass) {
      element.classList.remove(hideClass);
    },
    hideElement: function (element, hideClass) {
      element.classList.add(hideClass);
    },
    getRandomArrayIndex: function (array) {
      return Math.floor(Math.random() * array.length);
    }
  };
})();
