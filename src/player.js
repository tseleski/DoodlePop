class Player {
  constructor(ctx, gameWidth, gameHeight, dx = 3, x = 200) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 20;
    this.height = 40;
    this.x = x;
    this.dx = dx;
    this.y = gameHeight - this.height;
    this.moving = false;
    this.shooting = false;
    this.c = ctx;
  }

  draw() {
    this.c.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += this.dx;
  }

  moveLeft() {
    this.x -= this.dx;
  }

  update() {
    // if (this.x + this.width > this.gameWidth || this.x < 0) {
    //   this.dx = -this.dx;
    // }

    // if (this.moving){
    //   this.x += this.dx;
    // }

    // this.x += this.dx;

    if(this.x < 0){
      this.x = 0;
    }
    if (this.x > this.gameWidth - this.width) {
      this.x = this.gameWidth-this.width;
    }

    this.draw();
  }

}


module.exports = Player;