class Arrow {
  constructor(game, pos){
    this.game = game;
    this.c = game.context;
    this.x = pos;
    this.gameHeight = game.height;
    this.gameWidth = game.width;
    this.startHeight = game.player.height;
    this.y = this.gameHeight - this.startHeight;
    this.dy = 9;
  }

  shoot(){
    this.draw();
  }

  draw(){
    this.c.beginPath();
    this.c.moveTo(this.x, this.gameHeight);
    this.c.lineTo(this.x, this.y);
    this.c.closePath();
    this.c.lineWidth = 0.75;
    this.c.strokeStyle = '#666666';
    this.c.stroke();
  }

  update(){
    this.y -= this.dy;

    if (this.y < 20){
      this.game.removeObject(this);
    }

    this.draw();
  }

}

export default Arrow;