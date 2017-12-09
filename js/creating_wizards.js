'use strict';

(function () {
  var similarListElement = window.data.setupDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var numberCharacters = 4;
  var characters;
  var fragment;
  var charactersLength;
  var i;
  var startingPointWizardCycleFormation;

  var generateArrayCharacters = function (objWizard, quantity, startQuantity) {
    var arrayCharacters = [];
    var name;
    var surname;
    var coatColor;
    var eyesColor;

    for (startQuantity = 0; startQuantity < quantity; startQuantity++) {
      name = objWizard.names[window.util.getRandomArrayIndex(objWizard.names)];
      surname = objWizard.surnames[window.util.getRandomArrayIndex(objWizard.surnames)];
      coatColor = objWizard.coatColors[window.util.getRandomArrayIndex(objWizard.coatColors)];
      eyesColor = objWizard.eyesColors[window.util.getRandomArrayIndex(objWizard.eyesColors)];
      arrayCharacters[startQuantity] = {
        name: name + ' ' + surname,
        coatColor: coatColor,
        eyesColor: eyesColor
      };
    }

    return arrayCharacters;
  };

  var renderWizard = function (character) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = character.name;
    wizardElement.querySelector('.wizard-coat').style.fill = character.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;
    return wizardElement;
  };

  characters = generateArrayCharacters(window.data.allWizards, numberCharacters, startingPointWizardCycleFormation);

  fragment = document.createDocumentFragment();

  for (i = 0, charactersLength = characters.length; i < charactersLength; i++) {
    fragment.appendChild(renderWizard(characters[i]));
  }

  similarListElement.appendChild(fragment);

  window.util.toggleElement(window.data.setupDialog.querySelector('.setup-similar'), 'hidden');

})();

