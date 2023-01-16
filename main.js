// Data Model Variables
var currentGame = new Game();
var user = currentGame.user;
var computer = currentGame.computer;

// Query Selectors
var mainBoard = document.getElementById('mainBoard');
var gameTypes = document.getElementById('gameTypeSelection');
var classicView = document.getElementById('classicModeView');
var difficultView = document.getElementById('difficultModeView');
var changeGameBtn = document.getElementById('changeGameBtn');
var gameInfoHeader = document.getElementById('gameInfo');
var userWins = document.getElementById('userWins');
var computerWins = document.getElementById('computerWins');
var allFighters = document.querySelectorAll('.fighter-selection');

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
  var userSelect = currentGame.userFighterSelect(event);
  var computerSelect = currentGame.computerFighterSelect();
  currentGame.checkWin(userSelect, computerSelect);
  showSelectedFighters(currentGame.user, currentGame.computer);
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

function showSelectedFighters(player, computer) {
  var playerChoice = document.getElementById(player.choice);
  var computerChoice = document.getElementById(computer.choice);
  for (var i = 0; i < allFighters.length; i++) {
    hide(allFighters[i]);
  }
  playerChoice.classList.add('not-clickable');
  computerChoice.classList.add('not-clickable');
  show(playerChoice);
  show(computerChoice);
}

function resetBoard() {
  for (var i = 0; i < allFighters.length; i++) {
    show(allFighters[i]);
    allFighters[i].classList.remove('not-clickable');
    resetHeader();
  }
}

function changeInstructionHeader() {
  if (currentGame.winState === 'win'){
    userWins.innerText = `${user.wins}`;
    gameInfoHeader.innerText = `${user.token} You Win!`;
  } else if (currentGame.winState === 'loss'){
    computerWins.innerText = `${computer.wins}`
    gameInfoHeader.innerText = `The computer Wins! ${computer.token}`;
  } else {
    gameInfoHeader.innerText = `${user.token} Draw! ${computer.token}`;
  }
}

function resetHeader() {
  gameInfoHeader.innerText = `Choose your fighter!`;
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}