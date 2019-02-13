import Arrow from './arrow';

class Player {
  constructor(game, dx = 4) {
    this.game = game;
    this.gameWidth = game.width;
    this.gameHeight = game.height;
    this.width = 20;
    this.height = 70;
    this.x = game.width/2;
    this.dx = dx;
    this.y = game.height - this.height;
    this.moving = false;
    this.shooting = false;
    this.c = game.context;
  }

  shootArrow(){
    if (this.game.arrows.length < 1){
      this.game.addObject(new Arrow(this.game, this.x));
    }
  }

  draw() { 
    // head
    this.c.beginPath();
    this.c.strokeStyle = "black";
    this.c.fillStyle = '#f9f8f7'; 
    this.c.arc(this.x, this.gameHeight-55, 15, 0, Math.PI * 2, true);
    this.c.fill();
    this.c.lineWidth = 3;
    this.c.stroke();

    //body
    this.c.beginPath();
    this.c.moveTo(this.x, this.gameHeight-40);
    this.c.lineTo(this.x, this.gameHeight-25);
    this.c.strokeStyle = "black";
    this.c.stroke();

    //arms
    this.c.beginPath();
    this.c.moveTo(this.x, this.gameHeight - 40);
    this.c.lineTo(this.x-10, this.gameHeight - 20);
    this.c.moveTo(this.x, this.gameHeight - 40);
    this.c.lineTo(this.x+10, this.gameHeight - 20);
    this.c.strokeStyle = "black";
    this.c.stroke();

    //legs
    this.c.beginPath();
    this.c.moveTo(this.x, this.gameHeight-25);
    this.c.lineTo(this.x+10, this.gameHeight);
    this.c.moveTo(this.x, this.gameHeight-25);
    this.c.lineTo(this.x-10, this.gameHeight);
    this.c.closePath();
    this.c.strokeStyle = "black";
    this.c.stroke();
  }

  moveRight() {
    this.x += this.dx;
    if (this.x > this.gameWidth - (this.width / 2)) {
      this.x = this.gameWidth - (this.width / 2);
    }
  }

  moveLeft() {
    this.x -= this.dx;
    if (this.x < this.width / 2) {
      this.x = this.width / 2;
    }
  }

  update() {
    if(this.x < this.width/2){
      this.x = this.width/2;
    }
    if (this.x > this.gameWidth - (this.width/2)) {
      this.x = this.gameWidth-(this.width/2);
    }

    this.draw();
  }

}


export default Player;