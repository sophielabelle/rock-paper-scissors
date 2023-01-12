class Player {
  constructor(userName) {
    this.name = userName;
    // this.personToken = personToken;
    this.choice = undefined;
    this.wins = 0;
  }

  takeTurn(selection) {
    this.choice = selection;
  }
}