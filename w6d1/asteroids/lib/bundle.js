/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\n\nfunction Asteroid(pos) {\n  MovingObject.call(this,pos);\n  this.color = Asteroid.COLOR;\n  this.radius = Asteroid.RADIUS;\n  this.vel = Utils.randomVec(10);\n}\nUtils.inherits(Asteroid, MovingObject);\nAsteroid.COLOR = \"#00FF00\";\nAsteroid.RADIUS = 25;\n\n\nmodule.exports = Asteroid;\n// const mo = new Asteroid({pos: [100,100]});\n// let canvas = document.getElementById('game-canvas').getContext('2d');\n// mo.draw(canvas);\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Utils = Utils;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  let canvas = document.getElementById('game-canvas').getContext('2d');\n  const game = new Game();\n  const gameView = new GameView(game,canvas);\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\nfunction Game (){\n  this.DIM_X = Game.DIM_X;\n  this.DIM_Y = Game.DIM_Y;\n  this.NUM_ASTEROIDS = Game.NUM_ASTEROIDS;\n  this.asteroids = [];\n  this.addAsteroids();\n}\nGame.NUM_ASTEROIDS = 10;\nGame.DIM_X = 800;\nGame.DIM_Y = 800;\n\nGame.prototype.addAsteroids = function(){\n  while(this.asteroids.length < Game.NUM_ASTEROIDS){\n    let x = this.randomPosition();\n    let y = this.randomPosition();\n    this.asteroids.push(new Asteroid({pos: [x,y]}));\n  }\n};\n\nGame.prototype.randomPosition = function(){\n  return Math.floor(Math.random() * Math.floor(Game.DIM_X));\n};\n\nGame.prototype.draw = function(ctx){\n  // let canvas = document.getElementById('game-canvas').getContext('2d');\n  ctx.clearRect(0,0,800,800);\n  this.asteroids.forEach((el) => {\n    el.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function(){\n  this.asteroids.forEach((el) => {\n    el.move();\n  });\n};\n\nGame.prototype.checkCollisions = function() {\n  for(let i = 0; i<this.asteroids.length-1;i++) {\n    for(let j = i + 1; j<this.asteroids.length;j++) {\n      console.log(this.asteroids[i].isCollidedWith(this.asteroids[j]));\n      if(this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n        this.remove(j);\n        this.remove(i);\n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(idx) {\n  //this.asteroids.splice(idx,1);\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\nfunction GameView(game, ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n  setInterval(()=>{\n    this.game.step();\n    this.game.draw(this.ctx);\n\n  },20);\n};\n\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options){\n\n  this.pos = options.pos;\n  console.log(this.pos);\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n\n  ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2*Math.PI, true);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n\n  if (this.pos[0] <= 0){\n    this.pos[0] = 800;\n  } else if (this.pos[0] >= 800){\n    this.pos[0] = 0;\n  }\n  if (this.pos[1] <= 0){\n    this.pos[1] = 800;\n  } else if (this.pos[1] >= 800){\n    this.pos[1] = 0;\n  }\n  // this.pos[0]=Math.abs((this.pos[0] + (this.vel[0] * this.radius * 0.1));\n  // this.pos[1]=Math.abs((this.pos[1] + (this.vel[1] * this.radius * 0.1)) % 800);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let x1 = this.pos[0];\n  let x2 = otherObject.pos[0];\n  let y1 = this.pos[1];\n  let y2 = otherObject.pos[1];\n  const distance = Math.sqrt(Math.pow((x1-x2),2) + Math.pow(y1-y2,2));\n  return (distance <= (this.radius + otherObject.radius));\n};\nMovingObject.prototype.collideWith = function(otherObject) {\n  \n};\n//Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass,parentClass){\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });