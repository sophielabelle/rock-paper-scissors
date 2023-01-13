class Game {
  constructor() {
    this.user = new Player('Person', '🦄');
    this.computer = new Player('Computer', '🌸');
    this.gameType ;
    this.fighters;
    this.winState;
  }

  selectGameType(event) {
    if (event.target.closest('#classic')) {
      this.gameType = 'classic';
      this.fighters = ['clscEarth', 'clscFire', 'clscWood'];
      changeGameFighters();
    } else if (event.target.closest('#difficult')) {
      this.gameType = 'difficult';
      this.fighters = ['diffEarth', 'diffFire', 'diffWood', 'diffWater', 'diffMetal'];
      changeGameFighters();
    }
  }

  computerFighterSelect() {
    var computerTurn = this.getRandom(this.fighters);
    this.computer.takeTurn(computerTurn);
    showSelectedFighter(this.user, this.computer);
    setTimeout(this.resetBoard, 2500);
    return this.computer.choice;
  }

  checkWin(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
      this.winState = 'draw';
    } else if (userSelection === 'clscEarth' && computerSelection === 'clscFire') {
      this.updateWins(this.user)
    } else if (userSelection === 'clscFire' && computerSelection === 'wood') {
      this.updateWins(this.user)
    } else if (userSelection === 'clscWood' && computerSelection === 'clscEarth') {
      this.updateWins(this.user);
    } else if (userSelection === 'diffEarth' && (computerSelection === 'diffFire' || computerSelection === 'diffWater')) {
      this.updateWins(this.user)
    } else if (userSelection === 'diffFire' && (computerSelection === 'diffWood' || computerSelection === 'diffMetal')) {
      this.updateWins(this.user)
    } else if (userSelection === 'diffWood' && (computerSelection === 'diffWater' || computerSelection === 'diffEarth')) {
      this.updateWins(this.user)
    } else if (userSelection === 'diffWater' && (computerSelection === 'diffMetal' || computerSelection === 'diffFire')) {
      this.updateWins(this.user) 
    } else if (userSelection === 'diffMetal' && (computerSelection === 'diffEarth' || computerSelection === 'diffWood')) {
      this.updateWins(this.user)
    } else {
      this.updateWins(this.computer)
    }
  }
  
  updateWins(player) {
    if (player.name === 'Person') {
      this.user.addWin();
      this.winState = 'win';
    } else if (player.name = 'Computer') {
      this.computer.addWin();
      this.winState = 'loss';
    }
  }

  resetBoard() {
    for (var i = 0; i < 8; i++) {
      show(allFighters[i]);
      resetHeader();
    }
  }

  getRandom(array){
    return array[Math.floor(Math.random() * array.length)];
  }
}