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

var allFighters = document.querySelectorAll('.fighter-selection');

var gameInfoHeader = document.getElementById('gameInfo');
var userWins = document.getElementById('userWins');
var computerWins = document.getElementById('computerWins');

// Event Listeners
changeGameBtn.addEventListener('click', showMainView)
mainBoard.addEventListener('click', function(event) {
  if (event.target.closest('#gameTypeSelection')) {
    currentGame.selectGameType(event);
  } else if (event.target.classList.contains('fighter-selection')) {
    gameTime(event);
  }
})

// Event Handlers
function gameTime(event) {
  var userSelet = userFighterSelect(event);
  var computerSelect = currentGame.computerFighterSelect();
  currentGame.checkWin(userSelet, computerSelect);
  changeInstructionHeader();
}

function showMainView() {
  show(gameTypes);
  hide(changeGameBtn);
  hide(classicView);
  hide(difficultView);
  gameInfoHeader.innerText = `Choose your game!`
}

// Functions
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

function userFighterSelect(event) {
  var selection = event.target.id;
  user.takeTurn(selection);
  return user.choice;
}

function changeInstructionHeader() {
  if (currentGame.winState === 'win'){
    gameInfoHeader.innerText = `${user.token} is the Winner!`;
  } else if (currentGame.winState === 'loss'){
    gameInfoHeader.innerText = `${computer.token} is the Winner!`;
  } else {
    gameInfoHeader.innerText = `${user.token} Draw! ${computer.token}`;
  }
}

function showSelectedFighter(player, computer) {
  for (var i = 0; i < 8; i++) {
    hide(allFighters[i]);
  }
  var playerChoice = document.getElementById(player.choice);
  var computerChoice = document.getElementById(computer.choice);
  show(playerChoice);
  show(computerChoice);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}