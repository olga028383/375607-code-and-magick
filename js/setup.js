'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', event.target.alt);
      artifactsElement.style.outline = '2px solid rgb(255, 0, 0)';
    }
  });

  artifactsElement.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  artifactsElement.addEventListener('drop', function (event) {
    event.target.style.backgroundColor = '';
    event.target.appendChild(draggedItem.cloneNode(true));
    event.preventDefault();
  });
  artifactsElement.addEventListener('dragenter', function (event) {
    event.target.style.backgroundColor = 'yellow';
    event.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (event) {
    event.target.style.backgroundColor = '';
    event.preventDefault();
  });

  shopElement.addEventListener('dragend', function (event) {
    artifactsElement.style.outline = '';
    event.preventDefault();
  });
})();
