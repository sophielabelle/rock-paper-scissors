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
      this.fighters = ['clscEarth', 'clscFire', 'clscWood']
      classicGameFighters();
    } else if (event.target.id === 'difficult' || event.target.parentNode.id === 'difficult') {
      this.gameType = 'dificult';
      this.fighters = ['diffEarth', 'diffFire', 'diffWood', 'diffWater', 'diffMetal'];
      difficultGameFighters();
    }
  }

  checkWinClsc(userSelection, computerSelection) {
    if 
  }

  checkWinDiff(userSelection, computerSelection) {

  }
}