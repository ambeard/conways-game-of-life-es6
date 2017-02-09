import Tile from "../lib/Tile";

class Board {
  constructor(rows = 1, cols = 1, livingTiles = []) {
      this.rows = rows;
      this.cols = cols;
      this.livingTiles = livingTiles;
      this.matrix = [];
      this.createBoard(livingTiles);
  }

  createBoard() {
    var matrix = [];
    for(var i = 0; i < this.rows; i++) {
      matrix[i] = [];
      for(var j = 0; j < this.cols; j++) {
        matrix[i][j] = new Tile();
      }
    }
    this.matrix = matrix;
    this.setLivingTiles();
  }

  setLivingTiles() {
    this.livingTiles.forEach( (coord) => {
      this.getTileAt(coord[0], coord[1]).setAlive();
    });
  }

  getTileAt(x, y) {
    // Always return a dead tile outside the board's boundaries
    if(x < 0 || y < 0 || x >= this.cols || y >= this.rows) {
      return new Tile('dead');
    }
    return this.matrix[y][x];
  }

  getLiveNeighborCountFor(x, y) {
    let neighbors = [
      this.getTileAt(x-1, y-1), this.getTileAt(x, y-1), this.getTileAt(x+1, y-1),
      this.getTileAt(x-1, y),                           this.getTileAt(x+1, y),
      this.getTileAt(x-1, y+1), this.getTileAt(x, y+1), this.getTileAt(x+1, y+1)
    ]
    return neighbors.reduce((prevVal, tile) => prevVal + ( tile.isAlive() ? 1 : 0 ), 0);
  }

  calculateNextState() {
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++) {
        this.matrix[j][i].calculateNextState(
          this.getLiveNeighborCountFor(i, j)
        );
      }
    }
  }

  setNextState() {
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++) {
        this.matrix[j][i].setCurrentToNext();
      }
    }
  }

  play() {
    this.calculateNextState();
    this.setNextState();
  }

  toTesterFormat() {
    let out = []
    for(var i = 0; i < this.rows; i++){
      let row = []
      for(var j = 0; j < this.cols; j++) {
        this.matrix[j][i].isAlive() ? row.push(1) : row.push(0);
      }
      out.push(row);
    }
    return out;
  }

  prettyPrint(which = 'current') {
    let out = "\n";
    for(var i=0; i < this.rows; i++){
      if(which == 'nextState') {
        out += this.matrix[i].map( (tile) => { return tile.formattedNextState() }).join(" ") + "\n";
      } else {
        out += this.matrix[i].map( (tile) => { return tile.formattedCurrentState() }).join(" ") + "\n";
      }
    }
    out += "\n";
    return out;
  }
}
export default Board;
