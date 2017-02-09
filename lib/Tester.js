import Game from "../lib/Game";

class Tester {
  constructor(seed, numOfIterations, expectedState) {
    this.rows;
    this.cols;
    this.seed = seed;
    this.numOfIterations = numOfIterations;
    this.expectedState = expectedState;
    this.game = this.createGame();
  }

  createGame() {
    this.rows = this.seed.length;
    this.cols = this.seed[0].length;
    let livingTiles = this.convertToLivingTilesFormat(this.seed);
    return new Game(this.rows, this.cols, livingTiles);
  }

  convertToLivingTilesFormat(seed) {
    let livingTiles = [];
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++) {
        if(this.seed[j][i] == 1) {
          livingTiles.push([j, i]);
        }
      }
    }
    return livingTiles;
  }

  execute() {
    for(var i = 0; i < this.numOfIterations; i++) {
      this.game.board.play();
    }
    return (JSON.stringify(this.game.board.toTesterFormat()) === JSON.stringify(this.expectedState));
  }
}
export default Tester;
