'use strict';

(function () {
  var wizard = document.querySelector('.setup-wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  var changeWizard = function (element, array, callback) {
    var onWizardClick = function () {
      window.util.colorizeElement(element, array, callback);
    };
    element.addEventListener('click', onWizardClick);
  };

  changeWizard(wizardCoat, window.data.allWizards.coatColors, fillElement);
  changeWizard(wizardEyes, window.data.allWizards.eyesColors, fillElement);
  changeWizard(fireball, window.data.allWizards.fireball, changeElementBackground);
})();
