class Arrow {
  constructor(ctx, gameWidth, gameHeight, pos){
    this.c = ctx;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.x = pos;
  }

  shoot(){
    this.draw();
  }

  draw(){
    for (let i = this.gameHeight - 40; i > 0; i--) {
      this.c.beginPath();
      this.c.moveTo(this.x+10, this.gameHeight-40);
      this.c.lineTo(this.x+10, i);
      this.c.stroke();
    }
  }

}

export default Arrow;