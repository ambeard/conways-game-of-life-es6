import Game from "../lib/Game";

describe("Game", () => {
  describe("When setting up the board", () => {
    it("uses the default board if none is given", () => {
      let game = new Game();
      expect(game.rows).toEqual(30);
      expect(game.cols).toEqual(30);
      expect(game.board.getTileAt(0,0).isAlive()).toBe(false);
      expect(game.board.getTileAt(17,17).isAlive()).toBe(true);
    });

    it("uses the given board", () => {
      let game = new Game(2, 2, [[0,0]]);
      expect(game.rows).toEqual(2);
      expect(game.cols).toEqual(2);
      expect(game.board.getTileAt(0,0).isAlive()).toBe(true);
      expect(game.board.getTileAt(0,1).isAlive()).toBe(false);
      expect(game.board.getTileAt(1,0).isAlive()).toBe(false);
      expect(game.board.getTileAt(1,1).isAlive()).toBe(false);
    });

  });
});
