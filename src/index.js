import Player from './player';
import Bubble from './bubble';

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

  const player = new Player(c, GAME_WIDTH, GAME_HEIGHT);

  function keysPressed(e){
    keys[e.key] = true;
    e.preventDefault();
  }

  function keysReleased(e){
    keys[e.key] = false;
  }


  const bubble = new Bubble(c, GAME_WIDTH, GAME_HEIGHT, 400, 400, 30, 4, -4);
  // const player = new Player(c, GAME_WIDTH, GAME_HEIGHT, dx);

  const x = 200;
  const y = 200;
  const dx = 4;
  const dy = 1;
  const radius = 30;
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    bubble.update();
    // player.draw();
    if (keys["ArrowLeft"]) {
      player.moveLeft();
    }
    if (keys["ArrowRight"]) {
      player.moveRight();
    }
    player.update();

  }

  animate();
  // const game = new Game();
  // new GameView(game, c).start();
});