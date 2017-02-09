import Tile from "../lib/Tile";

describe("Tile", () => {
  describe("When first created", () => {
    let deadTile = new Tile('dead');
    let liveTile = new Tile('alive');

    it("is dead when initial state is not understood", () => {
      let someTile = new Tile('garbage');
      expect(deadTile.isAlive()).toBe(false);
    });

    it("can be alive or dead", () => {
      expect(deadTile.isAlive()).toBe(false);
      expect(liveTile.isAlive()).toBe(true);
    });

    it("dies next by default", () => {
      expect(deadTile.willBeAlive()).toBe(false);
      expect(deadTile.willBeAlive()).toBe(false);
    });
  });

  describe("When changing state", () => {
    let deadTile = new Tile('dead');

    it("can be set to alive", () => {
      deadTile.setAlive();
      expect(deadTile.isAlive()).toBe(true);
    });

    it("can be set to it's next state", () => {
      deadTile.nextState = 'alive';
      deadTile.setCurrentToNext();
      expect(deadTile.isAlive()).toBe(true);
    });

  });

  describe("When calculating next state", () => {
    let deadTile;
    let liveTile;

    describe("with more than three live neighbors", () => {
      beforeEach(() => {
        deadTile = new Tile('dead');
        liveTile = new Tile('alive');
      });

      it("dies if it's currently alive", () => {
        liveTile.calculateNextState(4);
        expect(liveTile.willBeAlive()).toBe(false);
      });

      it("stays dead if it's currently dead", () => {
        deadTile.calculateNextState(4);
        expect(deadTile.willBeAlive()).toBe(false);
      });
    });

    describe("with three live neighbors", () => {
      beforeEach(() => {
        deadTile = new Tile('dead');
        liveTile = new Tile('alive');
      });

      it("stays alive if it's currently alive", () => {
        liveTile.calculateNextState(3);
        expect(liveTile.willBeAlive()).toBe(true);
      });

      it("gets ressurected if it's currently dead", () => {
        deadTile.calculateNextState(3);
        expect(deadTile.willBeAlive()).toBe(true);
      });
    });

    describe("with two live neighbors", () => {
      beforeEach(() => {
        deadTile = new Tile('dead');
        liveTile = new Tile('alive');
      });

      it("stays alive if it's currently alive", () => {
        liveTile.calculateNextState(2);
        expect(liveTile.willBeAlive()).toBe(true);
      });

      it("stays dead if it's currently dead", () => {
        deadTile.calculateNextState(2);
        expect(deadTile.willBeAlive()).toBe(false);
      });
    });

    describe("with less than two live neighbors", () => {
      beforeEach(() => {
        deadTile = new Tile('dead');
        liveTile = new Tile('alive');
      });

      it("dies if it's currently alive with 1 live neighbor", () => {
        liveTile.calculateNextState(1);
        expect(liveTile.willBeAlive()).toBe(false);
      });

      it("dies if it's currently alive with 0 live neighbors", () => {
        liveTile.calculateNextState(0);
        expect(liveTile.willBeAlive()).toBe(false);
      });

      it("stays dead if it's currently dead with 1 live neighbor", () => {
        deadTile.calculateNextState(1);
        expect(deadTile.willBeAlive()).toBe(false);
      });

      it("stays dead if it's currently dead with 0 live neighbors", () => {
        deadTile.calculateNextState(0);
        expect(deadTile.willBeAlive()).toBe(false);
      });
    });
  });
});
