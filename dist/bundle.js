/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Board = __webpack_require__(1);

var _Board2 = _interopRequireDefault(_Board);

var _detectNode = __webpack_require__(3);

var _detectNode2 = _interopRequireDefault(_detectNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    var livingTiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Game);

    this.isNode = _detectNode2.default;
    this.rows = rows;
    this.cols = cols;
    this.livingTiles = livingTiles;
    this.roundsPlayed = 0;
    this.setUpBoard();
  }

  _createClass(Game, [{
    key: "setUpBoard",
    value: function setUpBoard() {
      this.defaultLivingTiles();
      this.board = new _Board2.default(this.rows, this.cols, this.livingTiles);
      this.board.createBoard();
    }
  }, {
    key: "defaultLivingTiles",
    value: function defaultLivingTiles() {
      if (this.livingTiles.length == 0 && this.rows == 30 && this.cols == 30) {
        var startx = this.cols / 2 - 3;
        var starty = this.rows / 2 - 3;
        this.livingTiles = [[startx + 1, starty + 1], [startx + 2, starty + 1], [startx + 3, starty + 1], [startx + 5, starty + 1], [startx + 1, starty + 2], [startx + 4, starty + 3], [startx + 5, starty + 3], [startx + 2, starty + 4], [startx + 3, starty + 4], [startx + 5, starty + 4], [startx + 1, starty + 5], [startx + 3, starty + 5], [startx + 5, starty + 5]];
      }
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      setInterval(function () {
        var roundsPlayedMessage = "Playing round " + _this.roundsPlayed;
        if (_this.isNode) {
          _this.resetConsole();
          console.log("Conway's Game of Life -- Ambi Sidhu");
          console.log(roundsPlayedMessage);
          console.log("(ctrl-c to exit)");
          console.log(_this.board.prettyPrint());
        } else {
          document.getElementById("counter").innerHTML = roundsPlayedMessage;
          document.getElementById("board").innerHTML = "<pre>" + _this.board.prettyPrint() + "</pre>";
        }
        _this.board.play();
        _this.roundsPlayed += 1;
      }, 100);
    }
  }, {
    key: "resetConsole",
    value: function resetConsole() {
      console.log('\x1Bc');
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tile = __webpack_require__(2);

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var livingTiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Board);

    this.rows = rows;
    this.cols = cols;
    this.livingTiles = livingTiles;
    this.matrix = [];
    this.createBoard(livingTiles);
  }

  _createClass(Board, [{
    key: 'createBoard',
    value: function createBoard() {
      var matrix = [];
      for (var i = 0; i < this.rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < this.cols; j++) {
          matrix[i][j] = new _Tile2.default();
        }
      }
      this.matrix = matrix;
      this.setLivingTiles();
    }
  }, {
    key: 'setLivingTiles',
    value: function setLivingTiles() {
      var _this = this;

      this.livingTiles.forEach(function (coord) {
        _this.getTileAt(coord[0], coord[1]).setAlive();
      });
    }
  }, {
    key: 'getTileAt',
    value: function getTileAt(x, y) {
      // Always return a dead tile outside the board's boundaries
      if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) {
        return new _Tile2.default('dead');
      }
      return this.matrix[y][x];
    }
  }, {
    key: 'getLiveNeighborCountFor',
    value: function getLiveNeighborCountFor(x, y) {
      var neighbors = [this.getTileAt(x - 1, y - 1), this.getTileAt(x, y - 1), this.getTileAt(x + 1, y - 1), this.getTileAt(x - 1, y), this.getTileAt(x + 1, y), this.getTileAt(x - 1, y + 1), this.getTileAt(x, y + 1), this.getTileAt(x + 1, y + 1)];
      return neighbors.reduce(function (prevVal, tile) {
        return prevVal + (tile.isAlive() ? 1 : 0);
      }, 0);
    }
  }, {
    key: 'calculateNextState',
    value: function calculateNextState() {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.matrix[j][i].calculateNextState(this.getLiveNeighborCountFor(i, j));
        }
      }
    }
  }, {
    key: 'setNextState',
    value: function setNextState() {
      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          this.matrix[j][i].setCurrentToNext();
        }
      }
    }
  }, {
    key: 'play',
    value: function play() {
      this.calculateNextState();
      this.setNextState();
    }
  }, {
    key: 'toTesterFormat',
    value: function toTesterFormat() {
      var out = [];
      for (var i = 0; i < this.rows; i++) {
        var row = [];
        for (var j = 0; j < this.cols; j++) {
          this.matrix[j][i].isAlive() ? row.push(1) : row.push(0);
        }
        out.push(row);
      }
      return out;
    }
  }, {
    key: 'prettyPrint',
    value: function prettyPrint() {
      var which = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'current';

      var out = "\n";
      for (var i = 0; i < this.rows; i++) {
        if (which == 'nextState') {
          out += this.matrix[i].map(function (tile) {
            return tile.formattedNextState();
          }).join(" ") + "\n";
        } else {
          out += this.matrix[i].map(function (tile) {
            return tile.formattedCurrentState();
          }).join(" ") + "\n";
        }
      }
      out += "\n";
      return out;
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {
  function Tile() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dead';

    _classCallCheck(this, Tile);

    this.currentState = initialState;
    this.nextState = 'dead';
  }

  _createClass(Tile, [{
    key: 'isAlive',
    value: function isAlive() {
      return this.currentState == 'alive';
    }
  }, {
    key: 'willBeAlive',
    value: function willBeAlive() {
      return this.nextState == 'alive';
    }
  }, {
    key: 'setAlive',
    value: function setAlive() {
      this.currentState = 'alive';
    }
  }, {
    key: 'formattedCurrentState',
    value: function formattedCurrentState() {
      return this.isAlive() ? '*' : ' ';
    }
  }, {
    key: 'formattedNextState',
    value: function formattedNextState() {
      return this.willBeAlive() ? '*' : ' ';
    }
  }, {
    key: 'calculateNextState',
    value: function calculateNextState(liveNeighborCount) {
      if (liveNeighborCount == 3) {
        this.nextState = 'alive';
      } else if (liveNeighborCount > 3 || liveNeighborCount < 2) {
        this.nextState = 'dead';
      } else {
        this.nextState = this.currentState;
      }
    }
  }, {
    key: 'setCurrentToNext',
    value: function setCurrentToNext() {
      this.currentState = this.nextState;
    }
  }]);

  return Tile;
}();

exports.default = Tile;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(0);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();
game.play();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map