'use strict';

(function () {
  var wizard = document.querySelector('.setup-wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');


  var onCoatClick = function () {
    var coatColor = window.data.allWizards.coatColors[window.util.getRandomArrayIndex(window.data.allWizards.coatColors)];
    wizardCoat.style.fill = coatColor;
  };

  var onEyesClick = function () {
    var eyesColor = window.data.allWizards.eyesColors[window.util.getRandomArrayIndex(window.data.allWizards.eyesColors)];
    wizardEyes.style.fill = eyesColor;
  };

  var onFireballClick = function () {
    var fireballColor = window.data.allWizards.fireball[window.util.getRandomArrayIndex(window.data.allWizards.fireball)];
    fireball.style.backgroundColor = fireballColor;
  };

  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);
})();
