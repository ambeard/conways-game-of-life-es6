import Tester from "../lib/Tester";

describe("Tester", () => {

  let firstExpectedState;
  let secondExpectedState;
  let numOfIterations;
  let tester;
  let seed;

  beforeEach(() => {
    seed = [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0]
    ];

    firstExpectedState = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    secondExpectedState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    numOfIterations = 1;

    tester = new Tester(seed, numOfIterations, firstExpectedState);
  });

  describe("When a new tester is created", () => {
    it("runs a game with all the right details", () => {
      let expectedLivingTiles = [ [2,0], [1,1], [0,2] ];

      expect(tester.game.rows).toEqual(3);
      expect(tester.game.cols).toEqual(3);
      expect(tester.game.livingTiles).toEqual(expectedLivingTiles);
    });

  });

  describe("When ensuring each iteration is valid", () => {
    it("succeeds for a simple 3x3 sqaure case over 1 round given correct expected state", () => {
      expect(tester.execute()).toBe(true);
    });

    it("succeeds for a simple 3x3 sqaure case over 2 round given correct expected state", () => {
      tester = new Tester(seed, 2, secondExpectedState);
      expect(tester.execute()).toBe(true);
    });
  });
});
