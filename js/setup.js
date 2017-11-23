'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var selectRandomArrayElement = function (array) {
  return Math.floor(Math.random() * array.length);
};
var generateArrayCharacters = function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var i;
  var numberCharacters = 4;
  var characters = [];
  for (i = 0; i < numberCharacters; i++) {
    characters[i] = {
      'name': names[selectRandomArrayElement(names)] + ' ' + surnames[selectRandomArrayElement(surnames)],
      'coatColor': coatColors[selectRandomArrayElement(coatColors)],
      'eyesColor': eyesColors[selectRandomArrayElement(eyesColors)]
    };
  }
  return characters;
};
var characters = generateArrayCharacters();
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < characters.length; i++) {
  fragment.appendChild(renderWizard(characters[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
