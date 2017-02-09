import Board from "../lib/Board";

describe("Board", () => {
  let board;

  describe("When creating a board with no live tiles", () => {
    beforeEach(() => {
      board = new Board(2, 5);
    });

    it("has 2 rows and 5 columns", () => {
      expect(board.matrix.length).toEqual(board.rows);
      expect(board.matrix[0].length).toEqual(board.cols);
    });

    it("has a dead tile at 1,1", () => {
      expect(board.getTileAt(1,1).constructor.name).toEqual('Tile');
      expect(board.getTileAt(1,1).isAlive()).toBe(false);
    });

    it("returns dead cells outside the board's boundaries", () => {
      expect(board.getTileAt(0,-1).isAlive()).toBe(false);
      expect(board.getTileAt(-1,0).isAlive()).toBe(false);
      expect(board.getTileAt(5,0).isAlive()).toBe(false);
      expect(board.getTileAt(0,2).isAlive()).toBe(false);
    });
  });

  describe("When creating a board with 2 live tiles", () => {
    beforeEach(() => {
      board = new Board(2, 2, [[0, 0],[1, 1]]);
    });

    it("has the living tiles in the right place", () => {
      expect(board.getTileAt(0,0).isAlive()).toBe(true);
      expect(board.getTileAt(0,1).isAlive()).toBe(false);
      expect(board.getTileAt(1,0).isAlive()).toBe(false);
      expect(board.getTileAt(1,1).isAlive()).toBe(true);
    });

    it("can export a format used for testing", () => {
      let expectedFormat = [
        [1,0],
        [0,1]
      ];
      expect(board.toTesterFormat()).toEqual(expectedFormat);
    });
  });

  describe("When getting a tile's live neighbor count", () => {
    it("counts 8 live neighbors for the tile at 2,2", () => {
      let board = new Board(3, 3,
        [
            [0,0], [1,0], [2,0],
            [0,1], [1,1], [2,1],
            [0,2], [1,2], [2,2]
        ]);
      expect(board.getLiveNeighborCountFor(1, 1)).toEqual(8);
    });

    it("counts 3 live neighbors for the tile at 0,0", () => {
      let board = new Board(3, 3,
        [
            [0,0], [1,0], [2,0],
            [0,1], [1,1], [2,1],
            [0,2], [1,2], [2,2]
        ]);
      expect(board.getLiveNeighborCountFor(1, 1)).toEqual(8);
    });

    it("counts 1 live neighbors for the tile at 2,2", () => {
      let board = new Board(3, 3,
        [
            [0,0],
                          [2,1],
                          [2,2]
        ]);
      expect(board.getLiveNeighborCountFor(2, 2)).toEqual(1);
    });
  });

  describe("When calculating it's next state", () => {
    it("sets each tile's next state", () => {
      let board = new Board(3, 3,
        [
                        [2,0],
                [1,1],
          [0,2]
        ]);

      board.calculateNextState();

      expect(board.getTileAt(0,0).willBeAlive()).toBe(false);
      expect(board.getTileAt(0,1).willBeAlive()).toBe(false);
      expect(board.getTileAt(0,2).willBeAlive()).toBe(false);

      expect(board.getTileAt(1,0).willBeAlive()).toBe(false);
      expect(board.getTileAt(1,1).willBeAlive()).toBe(true);
      expect(board.getTileAt(1,2).willBeAlive()).toBe(false);

      expect(board.getTileAt(2,0).willBeAlive()).toBe(false);
      expect(board.getTileAt(2,1).willBeAlive()).toBe(false);
      expect(board.getTileAt(2,2).willBeAlive()).toBe(false);
    });
  });

  describe("When setting tiles to their next state", () => {
    it("sets all tiles as expected", () => {
      let board = new Board(3, 3,
        [
                        [2,0],
                [1,1],
          [0,2]
        ]);

      board.calculateNextState();
      board.setNextState();

      expect(board.getTileAt(0,0).isAlive()).toBe(false);
      expect(board.getTileAt(0,1).isAlive()).toBe(false);
      expect(board.getTileAt(0,2).isAlive()).toBe(false);

      expect(board.getTileAt(1,0).isAlive()).toBe(false);
      expect(board.getTileAt(1,1).isAlive()).toBe(true);
      expect(board.getTileAt(1,2).isAlive()).toBe(false);

      expect(board.getTileAt(2,0).isAlive()).toBe(false);
      expect(board.getTileAt(2,1).isAlive()).toBe(false);
      expect(board.getTileAt(2,2).isAlive()).toBe(false);
    });
  });
});
