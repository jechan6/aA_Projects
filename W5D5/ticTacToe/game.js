const Board = require("./board");
class Game {
  constructor() {
    this.board = new Board();
    this.current_mark = "x";
  }

  switchMark() {
    this.current_mark = this.current_mark === "x" ? "o" : "x";
  }

  play() {
    getInput();
  }

  getInput() {
    
  }
}
