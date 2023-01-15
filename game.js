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

  userFighterSelect(event) {
    var userSelection = event.target.id;
    this.user.takeTurn(userSelection);
    return this.user.choice;
  }

  computerFighterSelect() {
    var computerTurn = this.getRandom(this.fighters);
    this.computer.takeTurn(computerTurn);
    setTimeout(resetBoard, 2500);
    return this.computer.choice;
  }

  checkWin(userSelect, comSelect) {
    if (userSelect === comSelect) {
      this.winState = 'draw';
    } else if (userSelect === 'clscEarth' && comSelect === 'clscFire') {
      this.updateWins(this.user);
    } else if (userSelect === 'clscFire' && comSelect === 'wood') {
      this.updateWins(this.user);
    } else if (userSelect === 'clscWood' && comSelect === 'clscEarth') {
      this.updateWins(this.user);
    } else if (userSelect === 'diffEarth' && (comSelect === 'diffFire' || comSelect === 'diffWater')) {
      this.updateWins(this.user);
    } else if (userSelect === 'diffFire' && (comSelect === 'diffWood' || comSelect === 'diffMetal')) {
      this.updateWins(this.user);
    } else if (userSelect === 'diffWood' && (comSelect === 'diffWater' || comSelect === 'diffEarth')) {
      this.updateWins(this.user);
    } else if (userSelect === 'diffWater' && (comSelect === 'diffMetal' || comSelect === 'diffFire')) {
      this.updateWins(this.user); 
    } else if (userSelect === 'diffMetal' && (comSelect === 'diffEarth' || comSelect === 'diffWood')) {
      this.updateWins(this.user);
    } else {
      this.updateWins(this.computer);
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

  getRandom(array){
    return array[Math.floor(Math.random() * array.length)];
  }
}