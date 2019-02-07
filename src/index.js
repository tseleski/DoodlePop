import Player from './player';
import Bubble from './bubble';
import Arrow from './arrow';
import Spike from './spike';
import * as Util from './utils';

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
  const bubble1 = new Bubble(c, GAME_WIDTH, GAME_HEIGHT, 400, 400, 50, 4, -4);
  const bubble2 = new Bubble(c, GAME_WIDTH, GAME_HEIGHT, 300, 300, 50, 4, 4);
  const spikes = new Spike(c, GAME_WIDTH, GAME_HEIGHT);

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    bubble1.update();
    bubble2.update();
    // let currentPos = player.x;
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
    spikes.draw();
    player.update();

    if (Util.getDistance(bubble1.x, bubble1.y, bubble2.x, bubble2.y) < bubble1.radius + bubble2.radius ){
      console.log("touching");
    }
  }

  animate();
  // const game = new Game();
  // new GameView(game, c).start();
});