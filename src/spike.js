class Spike {
  constructor(game){
    this.c = game.context;
    this.gameHeight = game.height;
    this.gameWidth = game.width;
  }

  draw(){
    let i = 40;
    while (i <= this.gameWidth+40){
      // top pencils
      this.c.fillStyle = 'orange';
      this.c.stroke();
      this.c.fillRect(i-40, 0, i, 20);

      // lines
      this.c.beginPath();
      this.c.moveTo(i - 40, 0);
      this.c.lineTo(i - 40, 20);
      this.c.closePath();
      this.c.lineWidth = 1;
      this.c.strokeStyle = 'black';
      this.c.stroke();
      this.c.beginPath();
      this.c.moveTo(i - 20, 0);
      this.c.lineTo(i - 20, 20);
      this.c.closePath();
      this.c.lineWidth = 1;
      this.c.strokeStyle = 'black';
      this.c.stroke();

      // start triangles
      this.c.beginPath();
      this.c.moveTo(i-40, 20);
      this.c.lineTo(i, 20);
      this.c.lineTo(i-20, 60);
      this.c.closePath();
      this.c.lineWidth = 1;
      this.c.strokeStyle = '#666666';
      this.c.stroke();
      this.c.fillStyle = '#f4e5c3';
      this.c.fill();
      this.c.beginPath();
      this.c.fillStyle = '#666666';
      this.c.strokeStyle = '#666666';
      this.c.moveTo(i - 30, 40);
      this.c.lineTo(i-10, 40);
      this.c.lineTo(i - 20, 60);
      this.c.closePath();
      this.c.lineWidth = 0.25;
      this.c.stroke();
      this.c.fill();
      i += 40;
    }
  }

}

export default Spike;