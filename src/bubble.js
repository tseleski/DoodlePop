import * as Util from './utils';

class Bubble {
  constructor(game, x, y, radius, dx, dy, color){
    this.c = game.context;
    this.game = game;
    this.gameWidth = game.width;
    this.gameHeight = game.height;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.gravity = 0.55;
    this.color = color;
  }

  draw(){
    this.c.beginPath();
    this.c.fillStyle = '#f9f8f7'; 
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.c.fill();
    this.c.lineWidth = 3;
    this.c.strokeStyle = this.color;
    this.c.stroke();
  }

  update(){
    if(Util.collidedWithChar(this, this.game.player)){
      this.game.removeObject(this);
      this.game.resetLevel();
    }
    if (this.game.arrows[0]){
      if (Util.collidedWithArrow(this, this.game.arrows[0])) {
        this.game.removeObject(this.game.arrows[0]);
        this.split();
      } 
    }
    if (this.y < 62 && ((this.x-20)%40) === 0){
      this.split();
    }

    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
    
    if (this.x + this.radius > this.gameWidth || this.x-this.radius < 0){
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.gameHeight || this.y < 40) {
      this.y = this.gameHeight - this.radius;
      this.dy = -this.dy;
    }

    this.draw();
  }

  split(){
    const popSound = new Audio("./sounds/pop.flac");
    if(!this.game.muted){
      popSound.play();
    }
    if(this.radius > 10 && this.y > 62){
      this.game.addObject(new Bubble(this.game, this.x, this.y+30, this.radius-20, this.dx * 1.1, -1 * Math.abs(this.dy), this.color));
      this.game.addObject(new Bubble(this.game, this.x, this.y+30, this.radius-20, -this.dx * 1.1, -1 * Math.abs(this.dy), this.color));
    } else if (this.radius > 10 && this.y <= 62){
      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, this.dx * 1.1, -4, this.color));
      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, -this.dx * 1.1, -4, this.color));
    }
    this.game.removeObject(this);
  }


}

export default Bubble;