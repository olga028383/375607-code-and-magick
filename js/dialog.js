'use strict';

(function () {
  var setupDialogOpen = document.querySelector('.setup-open');
  var setupDialogClose = window.data.setupDialog.querySelector('.setup-close');
  var setupDialogDrag = window.data.setupDialog.querySelector('.setup-user');

  var onClosePopupKeydown = function (event) {
    window.util.isEscEvent(event, window.util.toggleElement, 'hidden', window.data.setupDialog);
    window.data.setupDialog.removeAttribute('style');
  };

  var onSetupOpenButtonClick = function () {
    window.util.toggleElement(window.data.setupDialog, 'hidden');

    document.addEventListener('keydown', onClosePopupKeydown);
  };

  var onOpenPopupKeydown = function (event) {
    window.util.isEnterEvent(event, window.util.toggleElement, 'hidden', window.data.setupDialog);
  };

  var onPopupCloseButtonClick = function () {
    window.util.toggleElement(window.data.setupDialog, 'hidden');
    window.data.setupDialog.removeAttribute('style');
  };

  var onPopupMousedown = function (event) {
    event.preventDefault();

    var onPopupMousemove = function (eventMove) {
      eventMove.preventDefault();

      window.data.setupDialog.style.top = eventMove.clientY + 'px';
      window.data.setupDialog.style.left = eventMove.clientX + 'px';
      window.data.setupDialog.style.transform = 'none';
    };

    var onPopupMouseup = function (eventUp) {
      eventUp.preventDefault();

      document.removeEventListener('mousemove', onPopupMousemove);
      document.removeEventListener('mouseup', onPopupMouseup);
    };

    document.addEventListener('mousemove', onPopupMousemove);
    document.addEventListener('mouseup', onPopupMouseup);
  };

  setupDialogOpen.addEventListener('click', onSetupOpenButtonClick);
  setupDialogOpen.addEventListener('keydown', onOpenPopupKeydown);
  setupDialogClose.addEventListener('click', onPopupCloseButtonClick);

  setupDialogDrag.addEventListener('mousedown', onPopupMousedown);
})();

