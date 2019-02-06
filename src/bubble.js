class Bubble {
  constructor(ctx, gameWidth, gameHeight, x, y, radius, dx, dy){
    this.c = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  draw(){
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = 'orange';
    this.c.stroke();
  }

  update(){
    if (this.x + this.radius > this.gameWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.gameHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

}

module.exports = Bubble;