// Data Model Variables
var currentGame = new Game();
var user = currentGame.user;
var computer = currentGame.computer;

// Variables
var mainBoard = document.getElementById('mainBoard');
var gameTypes = document.getElementById('gameTypeSelection');
var clscGameChoice = document.getElementById('classic');
var diffGameChoice = document.getElementById('difficult');
var classicView = document.getElementById('classicModeView');
var difficultView = document.getElementById('difficultModeView');
var changeGameBtn = document.getElementById('changeGameBtn');

var gameInfoHeader = document.getElementById('gameInfo');
var userWins = document.getElementById('userWins');
var computerWins = document.getElementById('computerWins');

changeGameBtn.addEventListener('click', showMainView)
mainBoard.addEventListener('click', function(event) {
  if (event.target.closest('#gameTypeSelection')) {
    currentGame.selectGameType(event);
  } else if (event.target.classList.contains('fighter-selection')) {
    gameTime(event);
  }
})

// Functions
function gameTime(event) {
  var userSelet = userFighterSelect(event);
  var computerSelect = currentGame.computerFighterSelect();
  currentGame.checkWin(userSelet, computerSelect);
  console.log(userSelet, computerSelect);
}

function userFighterSelect(event) {
  var element = event.target.id;
  user.takeTurn(element);
  return user.choice;
}

function changeGameFighters() {
  if (currentGame.gameType === 'classic') {
    show(classicView);
  } else if (currentGame.gameType === 'difficult') {
    show(difficultView);
  }
  gameInfoHeader.innerText = `Choose your fighter!`;
  show(changeGameBtn);
  hide(gameTypes);
}

function showMainView() {
  show(gameTypes);
  hide(changeGameBtn);
  hide(classicView);
  hide(difficultView);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}