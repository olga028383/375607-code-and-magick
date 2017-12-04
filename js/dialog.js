'use strict';

(function () {
  // не могу понять, почему у меня клавиатурный ввод не всегда срабатывает, закрытие окна по esc
  var setupDialogOpen = document.querySelector('.setup-open');
  var setupDialogClose = window.data.setupDialog.querySelector('.setup-close');
  var setupDialogDrag = window.data.setupDialog.querySelector('.setup-user');

  var onClosePopupKeydown = function (event) {
    window.util.isEscEvent(event, window.util.hideElement, 'hidden', window.data.setupDialog);
    window.data.setupDialog.removeAttribute('style');
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
    window.data.setupDialog.removeAttribute('style');
  };

  var onDragPopupMousedown = function (event) {
    event.preventDefault();
    var coords = window.data.setupDialog.getBoundingClientRect();
    var shift = {
      x: event.clientX - coords.left,
      y: event.clientY - coords.top
    };

    var onDragPopupMousemove = function (eventMove) {
      eventMove.preventDefault();

      window.data.setupDialog.style.top = eventMove.clientY - shift.y + 'px';
      window.data.setupDialog.style.left = eventMove.clientX - shift.x + 'px';
      window.data.setupDialog.style.transform = 'none';
    };

    var onDragPopupMouseup = function (eventUp) {
      eventUp.preventDefault();
      // почему-то открывается окно загрузок по окончании перетаскивания
      document.removeEventListener('mousemove', onDragPopupMousemove);
      document.removeEventListener('mouseup', onDragPopupMouseup);
    };

    document.addEventListener('mousemove', onDragPopupMousemove);
    document.addEventListener('mouseup', onDragPopupMouseup);
  };

  setupDialogOpen.addEventListener('click', onOpenPopupClick);
  setupDialogOpen.addEventListener('keydown', onOpenPopupKeydown);
  setupDialogClose.addEventListener('click', onClosePopupClick);

  setupDialogDrag.addEventListener('mousedown', onDragPopupMousedown);
})();

