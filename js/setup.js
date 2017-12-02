
'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizard = document.querySelector('.setup-wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var setupDialog = document.querySelector('.setup');
var setupDialogOpen = document.querySelector('.setup-open');
var setupDialogClose = setupDialog.querySelector('.setup-close');
var similarListElement = setupDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var characters;
var fragment;
var charactersLength;
var i;
var startingPointWizardCycleFormation;
var allWizard = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
var numberCharacters = 4;

var showElement = function (element) {
  element.classList.remove('hidden');
};
var hideElement = function (element) {
  element.classList.add('hidden');
};

var getRandomArrayIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var generateArrayCharacters = function (objWizard, quantity, startQuantity) {
  var arrayCharacters = [];
  var name;
  var surname;
  var coatColor;
  var eyesColor;
  for (startQuantity = 0; startQuantity < quantity; startQuantity++) {
    name = objWizard.names[getRandomArrayIndex(objWizard.names)];
    surname = objWizard.surnames[getRandomArrayIndex(objWizard.surnames)];
    coatColor = objWizard.coatColors[getRandomArrayIndex(objWizard.coatColors)];
    eyesColor = objWizard.eyesColors[getRandomArrayIndex(objWizard.eyesColors)];
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

var onClosePopupKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    hideElement(setupDialog);
  }
};

var onOpenPopupClick = function () {
  showElement(setupDialog);

  document.addEventListener('keydown', onClosePopupKeydown);
};

var onOpenPopupKeydown = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showElement(setupDialog);
  }
};

var onClosePopupClick = function () {
  hideElement(setupDialog);
};

var onCoatClick = function () {
  var coatColor = allWizard.coatColors[getRandomArrayIndex(allWizard.coatColors)];
  wizardCoat.style.fill = coatColor;
};

var onEyesClick = function () {
  var eyesColor = allWizard.eyesColors[getRandomArrayIndex(allWizard.eyesColors)];
  wizardEyes.style.fill = eyesColor;
};

var onFireballClick = function () {
  var fireballColor = allWizard.fireball[getRandomArrayIndex(allWizard.fireball)];
  fireball.style.backgroundColor = fireballColor;
};

characters = generateArrayCharacters(allWizard, numberCharacters, startingPointWizardCycleFormation);

fragment = document.createDocumentFragment();

for (i = 0, charactersLength = characters.length; i < charactersLength; i++) {
  fragment.appendChild(renderWizard(characters[i]));
}

similarListElement.appendChild(fragment);

showElement(setupDialog.querySelector('.setup-similar'));

setupDialogOpen.addEventListener('click', onOpenPopupClick);
setupDialogOpen.addEventListener('keydown', onOpenPopupKeydown);
setupDialogClose.addEventListener('click', onClosePopupClick);

wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
fireball.addEventListener('click', onFireballClick);


