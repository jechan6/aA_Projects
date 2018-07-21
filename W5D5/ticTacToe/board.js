Array.prototype.transpose = function () {
  const result = [[],[],[]];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      result[i].push(this[j][i]);
    }
  }

  return result;
};

class Board {
  constructor() {
    this.grid = [[null,null,null],[null,null,null],[null,null,null]];
    this.winningPlayer = null;
  }
  rows() {
    return this.grid;
  }
  cols() {
    return this.grid.transpose;
  }
  diagonals() {
    return [ [[0,0],[1,1],[2,2]], [ [2,0],[1,1],[0,2] ] ];
  }

  won() {
    if (evalRows() || evalCols() || evalDiag()) {
      this.winner();
      return true;
    } else {
      return false;
    }
  }
  winner() {
    return this.winningPlayer;
  }

  empty(pos) {
    if (this.grid[pos[0]][pos[1]] === null) {
      return true;
    } else {
      return false;
    }
  }

  place_mark(pos,mark) {
    this.grid[pos[0]][pos[1]] = mark;
  }

  evalRows() {
    this.rows().forEach((arr) => {
      let winnerX = arr.every((el) => {
        this.winningPlayer = "x";
        return el === 'x';
      });
      let winnerO = arr.every((el) => {
        this.winningPlayer = "o";
        return el === 'o';
      });
      if (winnerX) {
        console.log("X is the winner!");
        return true;
      } else if (winnerO) {
        console.log("O is the winner!");
        return true;
      } else {
        return false;
      }
    });
  }

  evalCols() {
    this.cols().forEach((arr) => {
      let winnerX = arr.every((el) => {
        this.winningPlayer = "x";
        return el === 'x';
      });
      let winnerO = arr.every((el) => {
        this.winningPlayer = "o";
        return el === 'o';
      });
      if (winnerX) {
        console.log("X is the winner!");
        return true;
      } else if (winnerO) {
        console.log("O is the winner!");
        return true;
      } else {
        return false;
      }
    });
  }

  evalDiag() {
    this.diagonals().forEach((arr) => {
      let winnerX = arr.every((el) => {
        this.winningPlayer = "x";
        return el === 'x';
      });
      let winnerO = arr.every((el) => {
        this.winningPlayer = "o";
        return el === 'o';
      });
      if (winnerX) {
        console.log("X is the winner!");
        return true;
      } else if (winnerO) {
        console.log("O is the winner!");
        return true;
      } else {
        return false;
      }
    });
  }


}

module.exports = Board;
