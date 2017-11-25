'use strict';

var setupDialog = document.querySelector('.setup');
var similarListElement = setupDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var characters;
var fragment;
var charactersLength;
var i;
var startingPointWizardCycleFormation = 0;
var allWizard = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
};
var numberCharacters = 4;

var showElement = function (element) {
  element.classList.remove('hidden');
};

var getRandomArrayIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var generateArrayCharacters = function (objWizard, quantity, startQuantity) {
  var arrayCharacters = [];
  var name = objWizard.names[getRandomArrayIndex(objWizard.names)];
  var surname = objWizard.surnames[getRandomArrayIndex(objWizard.surnames)];
  var coatColor = objWizard.coatColors[getRandomArrayIndex(objWizard.coatColors)];
  var eyesColor = objWizard.eyesColors[getRandomArrayIndex(objWizard.eyesColors)];
  for (startQuantity = 0; startQuantity < quantity; i++) {
    characters[i] = {
      name: name + ' ' + surname,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  }
  return arrayCharacters;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

showElement(setupDialog);

characters = generateArrayCharacters(allWizard, numberCharacters, startingPointWizardCycleFormation);

fragment = document.createDocumentFragment();

for (i = 0, charactersLength = characters.length; i < charactersLength; i++) {
  fragment.appendChild(renderWizard(characters[i]));
}

similarListElement.appendChild(fragment);

showElement(setupDialog.querySelector('.setup-similar'));
