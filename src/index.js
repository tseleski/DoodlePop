import Player from './player';
import Bubble from './bubble';
import Arrow from './arrow';
import Spike from './spike';
import * as Util from './utils';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector('canvas');
  canvas.width = 750;
  canvas.height = 550;

  const c = canvas.getContext("2d");

  const GAME_WIDTH = 750;
  const GAME_HEIGHT = 550;

  const game = new Game(c, GAME_WIDTH, GAME_HEIGHT);
  // game.start();

  window.addEventListener("keydown", keysPressed, false);
  window.addEventListener("keyup", keysReleased, false);

  const keys = {};
  function keysPressed(e){
    keys[e.key] = true;
    e.preventDefault();
  }
  
  function keysReleased(e){
    keys[e.key] = false;
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    game.gameLoop();
    if (keys["ArrowLeft"]) {
      game.player.moveLeft();
    }
    if (keys["ArrowRight"]) {
      game.player.moveRight();
    }
    if (keys[" "]){
      game.player.shootArrow();
    }
  }

  animate();

  // const game = new Game();
  // new GameView(game, c).start();

});