// Dom elems
var currentGame = new Game();
var user;
// needs to keep track of the current users wins accross the games
var computer;
// needs to keep track of the computer wins

var gameTypes = document.getElementById('game-type-selection');
var clscGameChoice = document.getElementById('classic');
var diffGameChoice = document.getElementById('difficult');
var classicView = document.getElementById('classicModeView');
var difficultView = document.getElementById('difficultModeView');
var changeGameBtn = document.getElementById('changeGameBtn');

var gameInstrcHeader = document.getElementById('gameInstructions');
var userWins = document.getElementById('userWins');
var computerWins = document.getElementById('computerWins');

// Event Listeners 
gameTypes.addEventListener('click', function() {
  currentGame.selectGameType(event);
})
changeGameBtn.addEventListener('click', showMainView)

function showMainView() {
  show(gameTypes);
  hide(changeGameBtn);
  hide(classicView);
  hide(difficultView)
  gameInstrcHeader.innerText = `Choose your game!`
}

function classicGameFighters() {
  show(classicView);
  show(changeGameBtn);
  hide(gameTypes);
  gameInstrcHeader.innerText = `Choose your fighter!`;
}

function difficultGameFighters() {
  show(difficultView);
  show(changeGameBtn);
  hide(gameTypes);
  gameInstrcHeader.innerText = `Choose your fighter!`;
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}