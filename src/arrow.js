class Arrow {
  constructor(game){
    this.c = game.context;
    this.gameHeight = game.height;
    this.gameWidth = game.width;
    this.x = game.player.x;
    this.startHeight = game.player.height;
  }

  shoot(){
    this.draw();
  }

  draw(){
    for (let i = this.gameHeight - this.startHeight; i > 0; i--) {
      this.c.beginPath();
      this.c.moveTo(this.x, this.gameHeight-this.startHeight);
      this.c.lineTo(this.x, i);
      this.c.stroke();
    }
  }

}

export default Arrow;