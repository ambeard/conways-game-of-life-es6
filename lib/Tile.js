class Tile {
  constructor(initialState = 'dead') {
      this.currentState = initialState;
      this.nextState = 'dead';
  }

  isAlive() {
    return this.currentState == 'alive';
  }

  willBeAlive() {
    return this.nextState == 'alive';
  }

  setAlive() {
    this.currentState = 'alive';
  }

  formattedCurrentState() {
    return this.isAlive() ? '*' : ' ';
  }

  formattedNextState() {
    return this.willBeAlive() ? '*' : ' ';
  }

  calculateNextState(liveNeighborCount) {
    if(liveNeighborCount == 3) {
      this.nextState = 'alive';
    }
    else if(liveNeighborCount > 3 || liveNeighborCount < 2) {
      this.nextState = 'dead';
    }
    else {
      this.nextState = this.currentState;
    }
  }

  setCurrentToNext() {
    this.currentState = this.nextState;
  }
}
export default Tile;
