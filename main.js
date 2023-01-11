// Dom elems
var currentGame = new Game();
// var user = ;
// needs to keep track of the current users wins accross the games
// var computer = ;
// needs to keep track of the computer wins

var gameTypes = document.getElementById('game-type-selection');
var clscGameChoice = document.getElementById('classic');
var diffGameChoice = document.getElementById('difficult');
var classicView = document.getElementById('classicModeView');
var difficultView = document.getElementById('difficultModeView');
var changeGameBtn = document.getElementById('changeGameBtn');

var gameInstructionsTitle = document.getElementById('gameInstructions');
var userWins = document.getElementById('userWins');
var computerWins = document.getElementById('computerWins');

var earthClsc = document.getElementById('clscEarth');
var fireClsc = document.getElementById('clscFire');
var woodClsc = document.getElementById('clscWood');

var earthDiff = document.getElementById('diffEarth');
var fireDiff = document.getElementById('diffFire');
var woodDiff = document.getElementById('diffWood');
var waterDiff = document.getElementById('diffWater');
var metalDiff = document.getElementById('diffMetal');

gameTypes.addEventListener('click', function() {
  currentGame.selectGameType(event);
})
changeGameBtn.addEventListener('click', showMainView())

function showClassicView() {
  show(classicView);
  show(changeGameBtn);
  hide(gameTypes);

}

function showDifficultView() {
  show(difficultView);
  show(changeGameBtn);
  hide(gameTypes);

}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}