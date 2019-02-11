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
    this.gravity = 0.6125;
    this.color = color;
  }

  draw(){
    // var img = new Image();
    // img.src = '../images/bubble.png';
    // this.c.drawImage(img, 0, 0, 299, 299, this.x, this.y, this.radius, this.radius);
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // this.c.closePath();
    this.c.lineWidth = 3;
    this.c.strokeStyle = this.color;
    this.c.stroke();
  }

  // draw(){
  //   for (var i = 0; i < 500; i++) {
  //     var radiusError = +10 - i / 20;
  //     var d = 2 * Math.PI / 360 * i;
  //     this.drawHelper(200 + 100 * Math.cos(d), 200 + (radiusError + 80) * Math.sin(d));
  // }


  update(){
    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
    
    if (this.x + this.radius > this.gameWidth || this.x < 0){
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.gameHeight || this.y < 40) {
      this.y = this.gameHeight - this.radius;
      this.dy = -this.dy;
    }

    if(Util.collidedWithChar(this, this.game.player)){
      // console.log("hit player");
      this.game.lives--;
    }
    if (this.game.arrows[0]){
      if (Util.collidedWithArrow(this, this.game.arrows[0])) {
        // console.log("hit arrow");
        this.game.removeObject(this.game.arrows[0]);
        this.split();
      } 
    }
    if (this.y < 62 && ((this.x-20)%40) === 0){
      // console.log("hit spike");
      this.split();
    }
    this.draw();
  }

  split(){
    if(this.radius > 13 && this.y > 62){
      this.game.addObject(new Bubble(this.game, this.x, this.y, this.radius / 2, this.dx * 1.1, this.dy, this.color));
      this.game.addObject(new Bubble(this.game, this.x, this.y, this.radius / 2, -this.dx * 1.1, this.dy, this.color));
    } else if (this.radius > 10 && this.y <= 62){
      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, this.dx * 1.1, -4, this.color));
      this.game.addObject(new Bubble(this.game, this.x, 70, this.radius / 2, -this.dx * 1.1, -4, this.color));
    }
    this.game.removeObject(this);
  }


}

export default Bubble;