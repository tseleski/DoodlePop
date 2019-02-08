
class Player {
  constructor(game, dx = 3, x = 200) {
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

  draw() {
    // this.c.fillStyle = 'orange';
    // this.c.fillRect(this.x, this.y, this.width, this.height);
    // var img = new Image();
    // img.src = '../images/stick2.jpeg';
    // this.c.drawImage(img, this.x,10);
    this.c.beginPath();
    this.c.strokeStyle = "black"; // #000000
    this.c.arc(this.x, this.gameHeight-55, 15, 0, Math.PI * 2, true);
    this.c.lineWidth = 3;
    this.c.stroke(); //fill the circle  

    this.c.beginPath();
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
    this.c.strokeStyle = "black";
    this.c.moveTo(this.x, this.gameHeight - 40);
    this.c.lineTo(this.x-10, this.gameHeight - 20);
    this.c.moveTo(this.x, this.gameHeight - 40);
    this.c.lineTo(this.x+10, this.gameHeight - 20);
    this.c.stroke();

    //legs
    this.c.beginPath();
    this.c.strokeStyle = "black";
    this.c.moveTo(this.x, this.gameHeight-25);
    this.c.lineTo(this.x+10, this.gameHeight);
    this.c.moveTo(this.x, this.gameHeight-25);
    this.c.lineTo(this.x-10, this.gameHeight);
    this.c.stroke();
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

    if(this.x < this.width/2){
      this.x = this.width/2;
    }
    if (this.x > this.gameWidth - (this.width/2)) {
      this.x = this.gameWidth-(this.width/2);
    }

    this.draw();
  }

}


module.exports = Player;