class Spike {
  constructor(ctx, gameWidth, gameHeight){
    this.c = ctx;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  draw(){
    let i = 40;
    while (i <= this.gameWidth+40){
      this.c.beginPath();
      this.c.moveTo(i-40, 0);
      this.c.lineTo(i, 0);
      this.c.lineTo(i-20, 40);
      this.c.closePath();
      this.c.lineWidth = 0.25;
      this.c.strokeStyle = '#666666';
      this.c.stroke();
      this.c.fillStyle = '#666666';
      this.c.fill();
      i += 40;
    }
  }

}

export default Spike;