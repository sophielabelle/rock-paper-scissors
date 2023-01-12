class Game {
  constructor() {
    this.user = new Player('Person');
    this.computer = new Player('Computer');
    this.type ;
    this.fighters;
  }

  selectGameType(event) {
    if (event.target.id === 'classic' || event.target.parentNode.id === 'classic') {
      this.gameType = 'classic';
      this.fighters = ['clscEarth', 'clscFire', 'clscWood'];
      classicGameFighters();
    } else if (event.target.id === 'difficult' || event.target.parentNode.id === 'difficult') {
      this.gameType = 'dificult';
      this.fighters = ['diffEarth', 'diffFire', 'diffWood', 'diffWater', 'diffMetal'];
      difficultGameFighters();
    }
  }

  computerFighterSelect() {
    var computerTurn = this.getRandom(this.fighters);
    this.computer.takeTurn(computerTurn);
    return this.computer.choice;
  }

  checkWin(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
      gameInfoHeader.innerText = `Draw!`;
    } else if (userSelection === 'clscEarth' && computerSelection === 'clscFire') {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`;
    } else if (userSelection === 'clscFire' && computerSelection === 'wood') {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`;
    } else if (userSelection === 'clscWood' && computerSelection === 'clscEarth') {
      userWins.innerText = `${this.user.wins}`;
    } else if (userSelection === 'diffEarth' && computerSelection === 'diffFire' || computerSelection === 'diffWater') {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`;
    } else if (userSelection === 'diffFire' && computerSelection === 'diffWood' || computerSelection === 'diffMetal' ) {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`;
    } else if (userSelection === 'diffWood' && computerSelection === 'diffWater' || computerSelection === 'diffEarth') {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`;
    } else if (userSelection === 'diffWater' && computerSelection === 'diffMetal' || computerSelection === 'diffFire') {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`; 
    } else if (userSelection === 'diffMetal' && computerSelection === 'diffEarth' || computerSelection === 'diffWood') {
      this.user.wins += 1;
      userWins.innerText = `${this.user.wins}`;
    } else {
      this.computer.wins += 1;
      computerWins.innerText = `${this.computer.wins}`
    }
  }

  getRandom(array){
    return array[Math.floor(Math.random() * array.length)];
  }
}