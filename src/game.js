import Player from './player';
import Bubble from './bubble';
import Spike from './spike';
import Arrow from './arrow';
import { startLevel } from './levels';

class Game {
  constructor(context, width, height){
    this.context = context;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.bubbles = [];
    this.arrows = [];
    this.spikes = new Spike(this);
    this.lives = 3;
    this.level = 0;
  }

  addObject(newObject){
    if(newObject instanceof Bubble){
      this.bubbles.push(newObject);
    } else if (newObject instanceof Arrow){
      this.arrows.push(newObject);
    }
  }

  removeObject(object) {
    if (object instanceof Bubble) {
      this.bubbles.splice(this.bubbles.indexOf(object), 1);
    } else if (object instanceof Arrow) {
      this.arrows.splice(this.arrows.indexOf(object), 1);
    }
  }

  drawBackground(){
    let img = new Image();
    img.src = '../images/looseleaf.jpg';
    this.context.drawImage(img, 80, 30, 400, 300, 0, 0, this.width, this.height);
  }

  checkBeatLevel(){
    if(this.bubbles.length < 1){
      this.startNextLevel();
    }
  }

  startNextLevel(){
    this.level++;
    startLevel(this, this.level);
  }

  gameLoop(){
    this.drawBackground();
    this.arrows.forEach(arrow => {
      arrow.update();
    });
    this.player.draw();
    this.bubbles.forEach(bubble => {
      bubble.update();
    });
    this.spikes.draw();
    this.printLives();
    this.checkBeatLevel();
  }

  printLives(){
    this.context.font = "16px Arial";
    this.context.fillStyle = 'gray';
    this.context.fillText(`Lives: ${this.lives}`, 10, this.height-10);
  }

}

export default Game;