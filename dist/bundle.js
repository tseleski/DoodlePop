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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Arrow {\n  constructor(game, pos){\n    this.game = game;\n    this.c = game.context;\n    this.x = pos;\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n    this.startHeight = game.player.height;\n    this.y = this.gameHeight - this.startHeight;\n    this.dy = 9;\n  }\n\n  shoot(){\n    this.draw();\n  }\n\n  draw(){\n    this.c.beginPath();\n    this.c.moveTo(this.x, this.gameHeight);\n    this.c.lineTo(this.x, this.y);\n    this.c.closePath();\n    this.c.lineWidth = 0.50;\n    this.c.strokeStyle = '#666666';\n    this.c.stroke();\n  }\n\n  update(){\n    this.y -= this.dy;\n\n    if (this.y < 20){\n      this.game.removeObject(this);\n    }\n\n    this.draw();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Bubble {\n  constructor(game, x, y, radius, dx, dy, color=\"blue\"){\n    this.c = game.context;\n    this.game = game;\n    this.gameWidth = game.width;\n    this.gameHeight = game.height;\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.dx = dx;\n    this.dy = dy;\n    this.gravity = 0.6125;\n    this.damping = 0.9;\n    this.color = color;\n  }\n\n  draw(){\n    // var img = new Image();\n    // img.src = '../images/bubble.png';\n    // this.c.drawImage(img, 0, 0, 299, 299, this.x, this.y, this.radius, this.radius);\n    this.c.beginPath();\n    this.c.strokeStyle = this.color;\n    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n    this.c.lineWidth = 3;\n    this.c.stroke();\n  }\n\n  // draw(){\n  //   for (var i = 0; i < 500; i++) {\n  //     var radiusError = +10 - i / 20;\n  //     var d = 2 * Math.PI / 360 * i;\n  //     this.drawHelper(200 + 100 * Math.cos(d), 200 + (radiusError + 80) * Math.sin(d));\n  // }\n\n\n  update(){\n    this.dy += this.gravity;\n    this.x += this.dx;\n    this.y += this.dy;\n    \n    if (this.x + this.radius > this.gameWidth || this.x < 0){\n      this.dx = -this.dx;\n    }\n\n    if (this.y + this.radius > this.gameHeight || this.y < 40) {\n      this.y = this.gameHeight - this.radius;\n      this.dy = -this.dy;\n    }\n\n    if(_utils__WEBPACK_IMPORTED_MODULE_0__[\"collidedWithChar\"](this, this.game.player)){\n      // console.log(\"hit player\");\n      this.game.lives--;\n    }\n    if (this.game.arrows[0]){\n      if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"collidedWithArrow\"](this, this.game.arrows[0])) {\n        // console.log(\"hit arrow\");\n        this.game.removeObject(this.game.arrows[0]);\n        this.split();\n      } \n    }\n    if (this.y < 62 && ((this.x-20)%40) === 0){\n      // console.log(\"hit spike\");\n      this.split();\n    }\n    this.draw();\n  }\n\n  split(){\n    if(this.radius > 13 && this.y > 62){\n      this.game.addObject(new Bubble(this.game, this.x, this.y, this.radius / 2, this.dx * 1.1, this.dy, this.color));\n      this.game.addObject(new Bubble(this.game, this.x, this.y, this.radius / 2, -this.dx * 1.1, this.dy, this.color));\n    } else if (this.radius > 10 && this.y <= 62){\n      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, this.dx * 1.1, -4, this.color));\n      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, -this.dx * 1.1, -4, this.color));\n    }\n    this.game.removeObject(this);\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _spike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spike */ \"./src/spike.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\n\n\n\nclass Game {\n  constructor(context, width, height){\n    this.context = context;\n    this.width = width;\n    this.height = height;\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.bubbles = [];\n    this.arrows = [];\n    this.spikes = new _spike__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.lives = 3;\n    this.level = 0;\n  }\n\n  addObject(newObject){\n    if(newObject instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]){\n      this.bubbles.push(newObject);\n    } else if (newObject instanceof _arrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]){\n      this.arrows.push(newObject);\n    }\n  }\n\n  removeObject(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.bubbles.splice(this.bubbles.indexOf(object), 1);\n    } else if (object instanceof _arrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.arrows.splice(this.arrows.indexOf(object), 1);\n    }\n  }\n\n  drawBackground(){\n    let img = new Image();\n    img.src = '../images/looseleaf.jpg';\n    this.context.drawImage(img, 80, 30, 400, 300, 0, 0, this.width, this.height);\n  }\n\n  checkBeatLevel(){\n    if(this.bubbles.length < 1){\n      this.startNextLevel();\n    }\n  }\n\n  startNextLevel(){\n    this.level++;\n    Object(_levels__WEBPACK_IMPORTED_MODULE_4__[\"startLevel\"])(this, this.level);\n  }\n\n  gameLoop(){\n    this.drawBackground();\n    this.arrows.forEach(arrow => {\n      arrow.update();\n    });\n    this.player.draw();\n    this.bubbles.forEach(bubble => {\n      bubble.update();\n    });\n    this.spikes.draw();\n    this.printLives();\n    this.checkBeatLevel();\n  }\n\n  printLives(){\n    this.context.font = \"16px Arial\";\n    this.context.fillStyle = 'gray';\n    this.context.fillText(`Lives: ${this.lives}`, 10, this.height-10);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n/* harmony import */ var _spike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spike */ \"./src/spike.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  canvas.width = 800;\n  canvas.height = 600;\n\n  const c = canvas.getContext(\"2d\");\n\n  const GAME_WIDTH = 800;\n  const GAME_HEIGHT = 600;\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_5__[\"default\"](c, GAME_WIDTH, GAME_HEIGHT);\n  // game.start();\n\n  window.addEventListener(\"keydown\", keysPressed, false);\n  window.addEventListener(\"keyup\", keysReleased, false);\n\n  const keys = {};\n  function keysPressed(e){\n    keys[e.key] = true;\n    e.preventDefault();\n  }\n  \n  function keysReleased(e){\n    keys[e.key] = false;\n  }\n\n  function animate() {\n    requestAnimationFrame(animate);\n    c.clearRect(0, 0, innerWidth, innerHeight);\n    game.gameLoop();\n    if (keys[\"ArrowLeft\"]) {\n      game.player.moveLeft();\n    }\n    if (keys[\"ArrowRight\"]) {\n      game.player.moveRight();\n    }\n    if (keys[\" \"]){\n      game.player.shootArrow();\n    }\n  }\n\n  animate();\n\n  // const game = new Game();\n  // new GameView(game, c).start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: startLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startLevel\", function() { return startLevel; });\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\nconst startLevel = (game, levelNum) => {\n  switch (levelNum) {\n    case 1:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 400, game.height/2, 25, 3, 0, \"red\"));\n      break;\n    case 2:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 25, -3, 0, \"blue\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 3, 25, 3, 0, \"blue\"));\n      break;\n    case 3:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 400, game.height / 3, 50, 3, 0, \"green\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 2, 25, -3, 0, \"green\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 2, 25, 3, 0, \"green\"));\n      break;\n    case 4:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 100, game.height / 2, 25, -3, 0, \"purple\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 50, -3, 0, \"purple\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 500, game.height / 3, 50, 3, 0, \"purple\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 2, 25, 3, 0, \"purple\"));\n      break;\n    case 5:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 100, 3, 0, \"black\"));\n      break;\n    case 6:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 100, 3, 0, \"black\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 3, 100, -3, 0, \"black\"));\n      break;\n    default:\n      break;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\n\nclass Player {\n  constructor(game, dx = 3) {\n    this.game = game;\n    this.gameWidth = game.width;\n    this.gameHeight = game.height;\n    this.width = 20;\n    this.height = 70;\n    this.x = game.width/2;\n    this.dx = dx;\n    this.y = game.height - this.height;\n    this.moving = false;\n    this.shooting = false;\n    this.c = game.context;\n  }\n\n  shootArrow(){\n    if (this.game.arrows.length < 1){\n      this.game.addObject(new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, this.x));\n    }\n  }\n\n  draw() { \n    // head\n    this.c.beginPath();\n    this.c.strokeStyle = \"black\";\n    this.c.fillStyle = '#f9f8f7'; \n    this.c.arc(this.x, this.gameHeight-55, 15, 0, Math.PI * 2, true);\n    this.c.fill();\n    this.c.lineWidth = 3;\n    this.c.stroke();\n\n    //body\n    this.c.beginPath();\n    this.c.moveTo(this.x, this.gameHeight-40);\n    this.c.lineTo(this.x, this.gameHeight-25);\n    this.c.strokeStyle = \"black\";\n    this.c.stroke();\n\n    //arms\n    this.c.beginPath();\n    this.c.strokeStyle = \"black\";\n    this.c.moveTo(this.x, this.gameHeight - 40);\n    this.c.lineTo(this.x-10, this.gameHeight - 20);\n    this.c.moveTo(this.x, this.gameHeight - 40);\n    this.c.lineTo(this.x+10, this.gameHeight - 20);\n    this.c.stroke();\n\n    //legs\n    this.c.beginPath();\n    this.c.strokeStyle = \"black\";\n    this.c.moveTo(this.x, this.gameHeight-25);\n    this.c.lineTo(this.x+10, this.gameHeight);\n    this.c.moveTo(this.x, this.gameHeight-25);\n    this.c.lineTo(this.x-10, this.gameHeight);\n    this.c.stroke();\n  }\n\n  moveRight() {\n    this.x += this.dx;\n    if (this.x > this.gameWidth - (this.width / 2)) {\n      this.x = this.gameWidth - (this.width / 2);\n    }\n  }\n\n  moveLeft() {\n    this.x -= this.dx;\n    if (this.x < this.width / 2) {\n      this.x = this.width / 2;\n    }\n  }\n\n  update() {\n    // if (this.x + this.width > this.gameWidth || this.x < 0) {\n    //   this.dx = -this.dx;\n    // }\n\n    // if (this.moving){\n    //   this.x += this.dx;\n    // }\n\n    // this.x += this.dx;\n\n    if(this.x < this.width/2){\n      this.x = this.width/2;\n    }\n    if (this.x > this.gameWidth - (this.width/2)) {\n      this.x = this.gameWidth-(this.width/2);\n    }\n\n    this.draw();\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/spike.js":
/*!**********************!*\
  !*** ./src/spike.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Spike {\n  constructor(game){\n    this.c = game.context;\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n  }\n\n  draw(){\n    let i = 40;\n    while (i <= this.gameWidth+40){\n      // top pencils\n      this.c.fillStyle = 'orange';\n      this.c.strokeStyle = '#666666';\n      this.c.stroke();\n      this.c.fillRect(i-40, 0, i, 20);\n\n      // lines\n      this.c.beginPath();\n      this.c.moveTo(i - 40, 0);\n      this.c.lineTo(i - 40, 20);\n      this.c.closePath();\n      this.c.lineWidth = 1;\n      this.c.strokeStyle = 'black';\n      this.c.stroke();\n      this.c.beginPath();\n      this.c.moveTo(i - 20, 0);\n      this.c.lineTo(i - 20, 20);\n      this.c.closePath();\n      this.c.lineWidth = 1;\n      this.c.strokeStyle = 'black';\n      this.c.stroke();\n\n      // start triangles\n      this.c.beginPath();\n      this.c.moveTo(i-40, 20);\n      this.c.lineTo(i, 20);\n      this.c.lineTo(i-20, 60);\n      this.c.closePath();\n      this.c.lineWidth = 1;\n      this.c.strokeStyle = '#666666';\n      this.c.stroke();\n      this.c.fillStyle = '#f4e5c3';\n      this.c.fill();\n      this.c.beginPath();\n      this.c.moveTo(i - 30, 40);\n      this.c.lineTo(i-10, 40);\n      this.c.lineTo(i - 20, 60);\n      this.c.closePath();\n      this.c.lineWidth = 0.25;\n      this.c.strokeStyle = '#666666';\n      this.c.stroke();\n      this.c.fillStyle = '#666666';\n      this.c.fill();\n      i += 40;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spike);\n\n//# sourceURL=webpack:///./src/spike.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getDistance, collidedWithChar, collidedWithArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDistance\", function() { return getDistance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collidedWithChar\", function() { return collidedWithChar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collidedWithArrow\", function() { return collidedWithArrow; });\n\n\nconst getDistance = (x1, y1, x2, y2) => {\n  let xDistance = x2-x1;\n  let yDistance = y2-y1;\n\n  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));\n};\n\nconst collidedWithChar = (bubble, char) => {\n  let xDistance = Math.abs(char.x - bubble.x);\n  let yDistance = Math.abs(char.y - bubble.y);\n\n  if (xDistance < (bubble.radius+(char.width/2)) && (bubble.y+bubble.radius) > char.y){\n    return true;\n  } else {\n    return false;\n  }\n};\n\nconst collidedWithArrow = (bubble, arrow) => {\n  let xDistance = Math.abs(bubble.x - arrow.x);\n\n  if (xDistance < (bubble.radius)){\n    if (bubble.y > arrow.y) {\n      return true;\n    }\n  } else {\n    return false;\n  }\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });