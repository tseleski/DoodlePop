import Player from './player';
import Bubble from './bubble';
import Spike from './spike';

class Game {
  constructor(context, width, height){
    this.context = context;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.bubbles = [new Bubble(this, 400, 400, 50, 4, -4),
      new Bubble(this, 300, 300, 50, 4, 4)];
    // this.mainChar = [];
    this.spikes = new Spike(this);
  }

  gameLoop(){
    let img = new Image();
    img.src = '../images/looseleaf.jpg';
    // this.context.drawImage(img, 40, 10, 1800, 1200, 0, 0, this.width, this.height);
    this.context.drawImage(img, 80, 30, 400, 300, 0, 0, this.width, this.height);
    this.player.update();
    this.bubbles.forEach(bubble => {
      bubble.update();
    });
    this.spikes.draw();
  }

}

export default Game;