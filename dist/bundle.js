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
eval("__webpack_require__.r(__webpack_exports__);\nclass Arrow {\n  constructor(game, pos){\n    this.game = game;\n    this.c = game.context;\n    this.x = pos;\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n    this.startHeight = game.player.height;\n    this.y = this.gameHeight - this.startHeight;\n    this.dy = 9;\n  }\n\n  shoot(){\n    this.draw();\n  }\n\n  draw(){\n    this.c.beginPath();\n    this.c.moveTo(this.x, this.gameHeight);\n    this.c.lineTo(this.x, this.y);\n    this.c.closePath();\n    this.c.lineWidth = 0.75;\n    this.c.strokeStyle = '#666666';\n    this.c.stroke();\n  }\n\n  update(){\n    this.y -= this.dy;\n\n    if (this.y < 20){\n      this.game.removeObject(this);\n    }\n\n    this.draw();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Bubble {\n  constructor(game, x, y, radius, dx, dy, color){\n    this.c = game.context;\n    this.game = game;\n    this.gameWidth = game.width;\n    this.gameHeight = game.height;\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.dx = dx;\n    this.dy = dy;\n    this.gravity = 0.55;\n    this.color = color;\n  }\n\n  draw(){\n    this.c.beginPath();\n    this.c.fillStyle = '#f9f8f7'; \n    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n    this.c.fill();\n    this.c.lineWidth = 3;\n    this.c.strokeStyle = this.color;\n    this.c.stroke();\n  }\n\n  update(){\n    if(_utils__WEBPACK_IMPORTED_MODULE_0__[\"collidedWithChar\"](this, this.game.player)){\n      this.game.removeObject(this);\n      this.game.resetLevel();\n    }\n    if (this.game.arrows[0]){\n      if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"collidedWithArrow\"](this, this.game.arrows[0])) {\n        this.game.removeObject(this.game.arrows[0]);\n        this.split();\n      } \n    }\n    if (this.y < 62 && ((this.x-20)%40) === 0){\n      this.split();\n    }\n\n    this.dy += this.gravity;\n    this.x += this.dx;\n    this.y += this.dy;\n    \n    if (this.x + this.radius > this.gameWidth || this.x-this.radius < 0){\n      this.dx = -this.dx;\n    }\n\n    if (this.y + this.radius > this.gameHeight || this.y < 40) {\n      this.y = this.gameHeight - this.radius;\n      this.dy = -this.dy;\n    }\n\n    this.draw();\n  }\n\n  split(){\n    const popSound = new Audio(\"./sounds/pop.flac\");\n    if(!this.game.muted){\n      popSound.play();\n    }\n    if(this.radius > 10 && this.y > 62){\n      this.game.addObject(new Bubble(this.game, this.x, this.y+30, this.radius-20, this.dx * 1.1, -1 * Math.abs(this.dy), this.color));\n      this.game.addObject(new Bubble(this.game, this.x, this.y+30, this.radius-20, -this.dx * 1.1, -1 * Math.abs(this.dy), this.color));\n    } else if (this.radius > 10 && this.y <= 62){\n      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, this.dx * 1.1, -4, this.color));\n      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, -this.dx * 1.1, -4, this.color));\n    }\n    this.game.score += this.radius;\n    this.game.removeObject(this);\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _spike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spike */ \"./src/spike.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\n\n\n\nclass Game {\n  constructor(context, width, height){\n    this.context = context;\n    this.width = width;\n    this.height = height - 40;\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.bubbles = [];\n    this.arrows = [];\n    this.spikes = new _spike__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.lives = 5;\n    this.level = 0;\n    this.playing = true;\n    this.paused = false;\n    this.keys = { \"ArrowRight\": false, \"ArrowLeft\": false, \" \": false};\n    this.addKeyListeners = this.addKeyListeners.bind(this);\n    this.play_again = document.getElementsByClassName(\"play-again-btn\")[0];\n    this.start_btn = document.getElementsByClassName(\"start-btn\")[0];\n    this.instructions = document.getElementsByClassName(\"instruction-list\")[0];\n    this.play = this.play.bind(this);\n    this.drawBackground = this.drawBackground.bind(this);\n    this.gameLoop = this.gameLoop.bind(this);\n    this.printMessage = this.printMessage.bind(this);\n    this.beatLevel= false;\n    this.muted = false;\n    this.timer = this.width;\n    this.score = 0;\n  }\n\n  start(){\n    this.addKeyListeners();\n    this.drawBackground();\n    this.printInstructions();\n    this.spikes.draw();\n  }\n\n  printInstructions(){\n    let line0 = \"Try to pop all the bubbles!!\";\n    let line1 = \"Use the arrow keys to move from side to side.\";\n    let line2 = \"Use the spacebar to shoot the bubbles.\";\n    let line3 = \"If you get rid of all the bubbles, you will advance to the next level.\";\n    let line4 = \"Press 'p' to pause.\";\n    // this.context.fillStyle = \"rgba(0, 0, 0, 0.4)\";\n    // this.context.fillRect(0, 0, this.width, this.height);\n    this.context.font = \"bold 16px sans-serif\";\n    this.context.fillStyle = 'black';\n    this.context.textBaseline = 'middle';\n    this.context.textAlign = 'center';\n    this.context.fillText(line0, this.width / 2, (this.height / 3)-20);\n    this.context.font = \"16px sans-serif\";\n    this.context.fillText(\" \", this.width / 2, (this.height / 3));\n    this.context.fillText(line1, this.width / 2, (this.height / 3) + 20);\n    this.context.fillText(line2, this.width / 2, (this.height / 3) + 40);\n    this.context.fillText(line3, this.width / 2, (this.height / 3) + 60);\n    this.context.fillText(line4, this.width / 2, (this.height / 3) + 80);\n  }\n\n  addKeyListeners(){\n    window.addEventListener(\"keydown\", this.keysPressed.bind(this), false);\n    window.addEventListener(\"keyup\", this.keysReleased.bind(this), false);\n    this.play_again.addEventListener('click', this.restartGame.bind(this), false);\n    this.start_btn.addEventListener('click', this.restartGame.bind(this), false);\n  }\n\n  keysPressed(e) {\n    this.keys[e.key] = true;\n    e.preventDefault();\n  }\n\n  keysReleased(e) {\n    this.keys[e.key] = false;\n  }\n\n  addObject(newObject){\n    if(newObject instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]){\n      this.bubbles.push(newObject);\n    } else if (newObject instanceof _arrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]){\n      this.arrows.push(newObject);\n    }\n  }\n\n  removeObject(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.bubbles.splice(this.bubbles.indexOf(object), 1);\n    } else if (object instanceof _arrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      this.arrows.splice(this.arrows.indexOf(object), 1);\n    }\n  }\n\n  drawBackground(){\n    let img = new Image();\n    img.src = './images/looseleaf.jpg';\n    this.context.drawImage(img, 80, 30, 400, 300, 0, 0, this.width, this.height);\n  }\n\n  checkBeatLevel(){\n    if (this.level === 0 || (this.bubbles.length < 1 && this.level == 6)) {\n      this.startNextLevel();\n    } else if (this.bubbles.length < 1 && this.arrows.length < 1 && this.level > 0){\n      this.beatLevel = true;\n      this.score += Math.floor(this.timer/6);\n      this.playing = false;\n      setTimeout(() => {\n        this.beatLevel = false;\n        this.playing = true;\n        this.startNextLevel();\n        this.play();\n      }, 1000);\n    }\n  }\n\n  checkTimer() {\n    if(this.timer <= this.width/2){\n      this.timer = this.width;\n      this.playing = false;\n      this.printMessage('Times Up');\n      setTimeout(() => {\n        this.resetLevel();\n        this.playing = true;\n      }, 1000);\n    }\n  }\n\n  checkLostLives(){\n    if(this.lives < 1){\n      this.playing = false;\n    }\n  }\n\n  won(){\n    return (this.level === 7);\n  }\n\n  printMessage(msg){\n    this.context.fillStyle = \"rgba(0, 0, 0, 0.4)\";\n    this.context.fillRect(0, 0, this.width, this.height + 40);\n    this.context.font = \"70px Arial\";\n    this.context.fillStyle = 'white';\n    this.context.textAlign = 'center';\n    this.context.textBaseline = 'middle';\n    this.context.fillText(msg, this.width / 2, (this.height/2) - 20);\n  }\n\n  gameOver(){\n    return this.lives === 0 && !this.playing && !this.paused && (this.level > 0 && this.level < 7);\n  }\n\n  resetLevel(){\n    this.lives--;\n    this.timer = this.width;\n    this.arrows = [];\n    this.bubbles = [];\n    this.player.x = this.width/2;\n    Object(_levels__WEBPACK_IMPORTED_MODULE_4__[\"startLevel\"])(this, this.level);\n  }\n\n  startNextLevel(){\n    if(this.level === 6){\n      this.playing = false;\n    }\n    this.level++;\n    this.timer = this.width;\n    this.player.x = this.width/2;\n    Object(_levels__WEBPACK_IMPORTED_MODULE_4__[\"startLevel\"])(this, this.level);\n  }\n\n  gameLoop(){\n    this.checkBeatLevel();\n    this.timer =  this.timer - 0.40;\n    if (this.keys[\"ArrowLeft\"]) {\n      this.player.moveLeft();\n    }\n    if (this.keys[\"ArrowRight\"]) {\n      this.player.moveRight();\n    }\n    if (this.keys[\" \"]) {\n      this.player.shootArrow();\n    }\n    this.drawBackground();\n    this.arrows.forEach(arrow => {\n      arrow.update();\n    });\n    this.player.draw();\n    this.bubbles.forEach(bubble => {\n      bubble.update();\n    });\n    this.spikes.draw();\n    this.printTimer();\n    if(this.level < 7){\n      this.printLevel();\n    }\n    this.printLives();\n    this.printScore();\n    this.printLine();\n    this.checkTimer();\n    this.checkLostLives();\n  }\n\n  printLives(){\n    this.context.font = \"bold 16px sans-serif\";\n    this.context.fillStyle = 'black';\n    this.context.textAlign = 'left';\n    this.context.fillText('LIVES:', 80, this.height + 20);\n    let img = new Image();\n    img.src = './images/eraser.png';\n    let startAtWidth = 150;\n    for (let i = 0; i < this.lives; i++) {\n      this.context.drawImage(img, 10, 30, 1100, 1100, startAtWidth, this.height + 10, 25, 25);\n      startAtWidth += 25;      \n    }\n  }\n\n  printLevel() {\n    this.context.font = \"bold 16px sans-serif\";\n    this.context.fillStyle = 'black';\n    this.context.textAlign = 'left';\n    this.context.fillText(`Level ${this.level}`, 10, this.height + 20);\n  }\n\n  printScore() {\n    this.context.font = \"bold 16px sans-serif\";\n    this.context.fillStyle = 'black';\n    this.context.textAlign = 'left';\n    this.context.fillText(`Score: ${this.score}`, 285, this.height + 20);\n  }\n\n  printTimer() {\n    this.context.fillStyle = 'white';\n    this.context.fillRect(0, this.height, this.width, this.height + 40);\n    this.context.fillStyle = 'orange';\n    this.context.fillRect(this.width/2, this.height, this.timer-this.width/2, this.height+40);\n  }\n\n  printLine(){\n    this.context.beginPath();\n    this.context.moveTo(0, this.height);\n    this.context.lineTo(this.width, this.height);\n    this.context.closePath();\n    this.context.lineWidth = 3;\n    this.context.strokeStyle = 'black';\n    this.context.stroke();\n  }\n\n  restartGame(){\n    this.start_btn.classList.add('hide');\n    this.instructions.classList.remove('hide');\n    this.level = 0;\n    this.bubbles = [];\n    this.arrows = [];\n    this.lives = 5;\n    this.score = 0;\n    this.playing = true;\n    this.play_again.classList.add('hide');\n    this.play();\n  }\n\n  play(){\n    if (this.playing) {\n      this.context.clearRect(0, 0, this.width, this.height + 40);\n      this.gameLoop();\n    } \n    if (this.won()) {\n      this.printMessage(\"You win!\");\n      this.play_again.classList.remove('hide');\n      return;\n    } \n    if (this.beatLevel && this.level < 6) {\n      this.printMessage(`Level ${this.level + 1}`);\n      return;\n    } else if (this.gameOver()) {\n      this.printMessage(\"Game Over\");\n      this.play_again.classList.remove('hide');\n      return;\n    }\n    if (this.keys[\"p\"]) {\n      this.playing = !this.playing;\n      this.keys[\"p\"] = false;\n      this.printMessage('Paused');\n    }\n    // if (this.keys[\"s\"]) {\n    //   this.muted = !this.muted;\n    //   this.keys[\"s\"] = false;\n    // }\n    requestAnimationFrame(this.play);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  canvas.width = 760;\n  canvas.height = 550;\n  const c = canvas.getContext(\"2d\");\n\n  const play_again = document.getElementsByClassName(\"play-again-btn\")[0];\n  play_again.classList.add('hide');\n\n  const GAME_WIDTH = 760;\n  const GAME_HEIGHT = 550;\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](c, GAME_WIDTH, GAME_HEIGHT);\n  game.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: startLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startLevel\", function() { return startLevel; });\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\nconst startLevel = (game, levelNum) => {\n  switch (levelNum) {\n    case 1:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 400, game.height / 2, 30, 3, 0, \"#82032e\"));\n      break;\n    case 2:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 30, -3, 0, \"#0c4596\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 3, 30, 3, 0, \"#0c4596\"));\n      break;\n    case 3:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 3, 50, 3, 0, \"green\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 2, 30, -3, 0, \"green\"));\n      break;\n    case 4:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 50, -3, 0, \"purple\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 500, game.height / 3, 50, 3, 0, \"purple\"));\n      break;\n    case 5:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 3, 70, 3, 0, \"#d88934\"));\n      break;\n    case 6:\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, game.height / 3, 70, 3, 0, \"black\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, game.height / 3, 30, -3, 0, \"black\"));\n      break;\n    case 'won':\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3) - 20 , 50, 3, 0, \"black\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3) + 30, 70, 5, 0, \"purple\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3) + 10, 30, 4, 0, \"green\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3), 10, 3, 0, \"yellow\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3) - 10, 10, 3, 0, \"red\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3), 30, 4, 0, \"orange\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 600, (game.height / 3), 50, -4, 0, \"pink\"));\n      game.addObject(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, 200, (game.height / 3), 30, -3, 0, \"blue\"));\n      break;\n    default:\n      break;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\n\nclass Player {\n  constructor(game, dx = 4) {\n    this.game = game;\n    this.gameWidth = game.width;\n    this.gameHeight = game.height;\n    this.width = 20;\n    this.height = 70;\n    this.x = game.width/2;\n    this.dx = dx;\n    this.y = game.height - this.height;\n    this.moving = false;\n    this.shooting = false;\n    this.c = game.context;\n  }\n\n  shootArrow(){\n    if (this.game.arrows.length < 1){\n      const whooshSound = new Audio(\"./sounds/whoosh.ogg\");\n      if (!this.game.muted) {\n        whooshSound.play();\n      }\n      this.game.addObject(new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, this.x));\n    }\n  }\n\n  draw() { \n    // head\n    this.c.beginPath();\n    this.c.strokeStyle = \"black\";\n    this.c.fillStyle = '#f9f8f7'; \n    this.c.arc(this.x, this.gameHeight-55, 15, 0, Math.PI * 2, true);\n    this.c.fill();\n    this.c.lineWidth = 3;\n    this.c.stroke();\n\n    //body\n    this.c.beginPath();\n    this.c.moveTo(this.x, this.gameHeight-40);\n    this.c.lineTo(this.x, this.gameHeight-25);\n    this.c.strokeStyle = \"black\";\n    this.c.stroke();\n\n    //arms\n    this.c.beginPath();\n    this.c.moveTo(this.x, this.gameHeight - 40);\n    this.c.lineTo(this.x-10, this.gameHeight - 20);\n    this.c.moveTo(this.x, this.gameHeight - 40);\n    this.c.lineTo(this.x+10, this.gameHeight - 20);\n    this.c.strokeStyle = \"black\";\n    this.c.stroke();\n\n    //legs\n    this.c.beginPath();\n    this.c.moveTo(this.x, this.gameHeight-25);\n    this.c.lineTo(this.x+10, this.gameHeight);\n    this.c.moveTo(this.x, this.gameHeight-25);\n    this.c.lineTo(this.x-10, this.gameHeight);\n    this.c.closePath();\n    this.c.strokeStyle = \"black\";\n    this.c.stroke();\n  }\n\n  moveRight() {\n    this.x += this.dx;\n    if (this.x > this.gameWidth - (this.width / 2)) {\n      this.x = this.gameWidth - (this.width / 2);\n    }\n  }\n\n  moveLeft() {\n    this.x -= this.dx;\n    if (this.x < this.width / 2) {\n      this.x = this.width / 2;\n    }\n  }\n\n  update() {\n    if(this.x < this.width/2){\n      this.x = this.width/2;\n    }\n    if (this.x > this.gameWidth - (this.width/2)) {\n      this.x = this.gameWidth-(this.width/2);\n    }\n\n    this.draw();\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/spike.js":
/*!**********************!*\
  !*** ./src/spike.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Spike {\n  constructor(game){\n    this.c = game.context;\n    this.gameHeight = game.height;\n    this.gameWidth = game.width;\n  }\n\n  draw(){\n    let i = 40;\n    while (i <= this.gameWidth+40){\n      // top pencils\n      this.c.fillStyle = 'orange';\n      this.c.stroke();\n      this.c.fillRect(i-40, 0, i, 20);\n\n      // lines\n      this.c.beginPath();\n      this.c.moveTo(i - 40, 0);\n      this.c.lineTo(i - 40, 20);\n      this.c.closePath();\n      this.c.lineWidth = 1;\n      this.c.strokeStyle = 'black';\n      this.c.stroke();\n      this.c.beginPath();\n      this.c.moveTo(i - 20, 0);\n      this.c.lineTo(i - 20, 20);\n      this.c.closePath();\n      this.c.lineWidth = 1;\n      this.c.strokeStyle = 'black';\n      this.c.stroke();\n\n      // start triangles\n      this.c.beginPath();\n      this.c.moveTo(i-40, 20);\n      this.c.lineTo(i, 20);\n      this.c.lineTo(i-20, 60);\n      this.c.closePath();\n      this.c.lineWidth = 1;\n      this.c.strokeStyle = '#666666';\n      this.c.stroke();\n      this.c.fillStyle = '#f4e5c3';\n      this.c.fill();\n      this.c.beginPath();\n      this.c.fillStyle = '#666666';\n      this.c.strokeStyle = '#666666';\n      this.c.moveTo(i - 30, 40);\n      this.c.lineTo(i-10, 40);\n      this.c.lineTo(i - 20, 60);\n      this.c.closePath();\n      this.c.lineWidth = 0.25;\n      this.c.stroke();\n      this.c.fill();\n      i += 40;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spike);\n\n//# sourceURL=webpack:///./src/spike.js?");

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