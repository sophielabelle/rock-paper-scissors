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

// Event Listeners
gameTypes.addEventListener('click', function() {
  currentGame.selectGameType(event);
  console.log('select game type el')
})
changeGameBtn.addEventListener('click', showMainView)
mainBoard.addEventListener('click', function() {
  gameTime();
  console.log('game time eL')
})

// Functions
function gameTime() {
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

function showMainView() {
  show(gameTypes);
  hide(changeGameBtn);
  hide(classicView);
  hide(difficultView)
  // changeInfoHeader();
}

function changeGameFighters() {
  show(classicView);
  show(changeGameBtn);
  hide(gameTypes);
  // changeInfoHeader();
}

function difficultGameFighters() {
  show(difficultView);
  show(changeGameBtn);
  hide(gameTypes);
  // changeInfoHeader();
}

function changeInfoHeader() {
  gameInfoHeader.innerText = `Choose your game!`
  gameInfoHeader.innerText = `Choose your fighter!`;
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden')
}