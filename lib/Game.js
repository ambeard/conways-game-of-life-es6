import Board from "../lib/Board";
import isNode from 'detect-node'

class Game {
  constructor(rows = 30, cols = 30, livingTiles = []) {
    this.isNode = isNode;
    this.rows = rows;
    this.cols = cols;
    this.livingTiles = livingTiles;
    this.roundsPlayed = 0;
    this.setUpBoard();
  }

  setUpBoard() {
    this.defaultLivingTiles();
    this.board = new Board(this.rows, this.cols, this.livingTiles);
    this.board.createBoard();
  }

  defaultLivingTiles() {
    if(this.livingTiles.length == 0 && this.rows == 30 && this.cols == 30) {
      let startx = this.cols/2 -3;
      let starty = this.rows/2 -3;
      this.livingTiles =
      [
        [startx+1,starty+1], [startx+2,starty+1], [startx+3,starty+1], [startx+5,starty+1],
        [startx+1,starty+2],
        [startx+4,starty+3], [startx+5,starty+3],
        [startx+2,starty+4], [startx+3,starty+4], [startx+5,starty+4],
        [startx+1,starty+5], [startx+3,starty+5], [startx+5,starty+5]
      ]
    }
  }

  play() {
    setInterval( () => {
      let roundsPlayedMessage = "Playing round " + this.roundsPlayed;
      if(this.isNode) {
        this.resetConsole();
        console.log("Conway's Game of Life -- Ambi Sidhu");
        console.log(roundsPlayedMessage);
        console.log("(ctrl-c to exit)");
        console.log(this.board.prettyPrint());
      } else {
        document.getElementById("counter").innerHTML = roundsPlayedMessage;
        document.getElementById("board").innerHTML = "<pre>" + this.board.prettyPrint() + "</pre>";
      }
      this.board.play();
      this.roundsPlayed += 1;
    }, 100 );
  }

  resetConsole() {
    console.log('\x1Bc')
  }
}
export default Game;
