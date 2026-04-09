class Game {
  constructor() {
    this.players = [];
    this.currentTurn = 0;
    this.battlefield = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  startGame() {
    if (this.players.length < 2) {
      throw new Error("Not enough players to start the game.");
    }
    this.currentTurn = 0;
    console.log("Game started!");
  }

  nextTurn() {
    this.currentTurn = (this.currentTurn + 1) % this.players.length;
    console.log(`It's ${this.players[this.currentTurn]}'s turn.`);
  }

  attack(attacker, target) {
    if (!this.players.includes(attacker) || !this.players.includes(target)) {
      throw new Error("Both attacker and target must be players in the game.");
    }
    // Simulate attack logic here
    console.log(`${attacker} attacks ${target}!`);
  }

  updateBattlefield(action) {
    this.battlefield.push(action);
    console.log(`Battlefield updated: ${action}`);
  }
}

module.exports = Game;