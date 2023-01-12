class Player {
  constructor(userName, token) {
    this.name = userName;
    this.token = token;
    this.choice = undefined;
    this.wins = 0;
  }

  takeTurn(selection) {
    this.choice = selection;
  }
}