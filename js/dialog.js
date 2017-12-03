'use strict';

(function () {
  // не могу понять, почему у меня клавиатурный ввод не всегда срабатывает, закрытие окна по esc
  var setupDialogOpen = document.querySelector('.setup-open');
  var setupDialogClose = window.data.setupDialog.querySelector('.setup-close');

  var onClosePopupKeydown = function (event) {
    window.util.isEscEvent(event, window.util.hideElement, 'hidden', window.data.setupDialog);
  };

  var onOpenPopupClick = function () {
    window.util.showElement(window.data.setupDialog, 'hidden');

    document.addEventListener('keydown', onClosePopupKeydown);
  };

  var onOpenPopupKeydown = function (event) {
    window.util.isEnterEvent(event, window.util.showElement, 'hidden', window.data.setupDialog);
  };

  var onClosePopupClick = function () {
    window.util.hideElement(window.data.setupDialog, 'hidden');
  };
  setupDialogOpen.addEventListener('click', onOpenPopupClick);
  setupDialogOpen.addEventListener('keydown', onOpenPopupKeydown);
  setupDialogClose.addEventListener('click', onClosePopupClick);
})();

