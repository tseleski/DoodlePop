import Player from './player';
import Bubble from './bubble';
import Arrow from './arrow';
import Spike from './spike';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector('canvas');
  canvas.width = 800;
  canvas.height = 600;

  const c = canvas.getContext("2d");

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 600;


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
  
  const player = new Player(c, GAME_WIDTH, GAME_HEIGHT);
  const bubble1 = new Bubble(c, GAME_WIDTH, GAME_HEIGHT, 400, 400, 30, 4, -4);
  const bubble2 = new Bubble(c, GAME_WIDTH, GAME_HEIGHT, 300, 300, 15, 4, 4);
  const spike = new Spike(c, GAME_WIDTH, GAME_HEIGHT);

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    bubble1.update();
    bubble2.update();
    if (keys["ArrowLeft"]) {
      player.moveLeft();
    }
    if (keys["ArrowRight"]) {
      player.moveRight();
    }
    if (keys[" "]){
      let arrow = new Arrow(c, GAME_WIDTH, GAME_HEIGHT, player.x);
      arrow.shoot();
    }
    spike.draw();
    player.update();
  }

  animate();
  // const game = new Game();
  // new GameView(game, c).start();
});