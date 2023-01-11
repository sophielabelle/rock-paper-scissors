class Game {
  constructor() {
    this.user = new Player('Person');
    this.computer = new Player('Computer');
    // this.type = gameType;
  }

  selectGameType(event) {
    if (event.target.id === 'classic') {
      showClassicView();
    } else if (event.target.id === 'difficult') {
      showDifficultView();
    }
  }

  // resetGameBoard() {

  // }

  // needs a function once the game type selected
// use player take turn to determine which character is slected
  // will see the specefic game type and select which characters and test the logic

  // toggle hidden funtion
  // build reusable funtion to add or remove a hidden class to something
}