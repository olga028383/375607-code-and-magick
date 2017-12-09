'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (event, action, elementClass, element) {
      if (event.keyCode === ESC_KEYCODE) {
        action(element, elementClass);
      }
    },
    isEnterEvent: function (event, action, elementClass, element) {
      if (event.keyCode === ENTER_KEYCODE) {
        action(element, elementClass);
      }
    },
    toggleElement: function (element, elementClass) {
      element.classList.toggle(elementClass);
    },
    getRandomArrayIndex: function (array) {
      return Math.floor(Math.random() * array.length);
    }
  };
})();
