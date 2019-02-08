class Bubble {
  constructor(game, x, y, radius, dx, dy){
    this.c = game.context;
    this.gameWidth = game.width;
    this.gameHeight = game.height;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.gravity = 0.2;
    this.damping = 0.9;
    this.traction = 0.8;
  }

  draw(){
    var img = new Image();
    img.src = '../images/bubble.png';
    this.c.drawImage(img, 0, 0, 299, 299, this.x, this.y, this.radius, this.radius);
    // var img = new Image();
    // img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB50RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNS4xqx9I6wAAABR0RVh0Q3JlYXRpb24gVGltZQAxLzQvMTJldbXMAAABBklEQVQ4jY3T0UrDQBCF4S9NpFqLCIqi6I0Xvv+DiXhTm2wT40Vm6Vqr6cIQdmf3nzlnSIVH3OALH3hHi9EJq8YLXvGEJbqI4RRAg0s84x4PWMTjN6S5Thr08eguoiqqz0JqrKKLG9ziKoAdPufk1EEfovIK11jHvg1IMpl8FDBgG9GbjFxHV6KDLXbHIHUcpri0iYtnBWRR5H9B6viOkdwWug8hXUjaKUytC9gYEjIk2Y/5opDTxr3xEFBCsnldVD+PWEQHXYYcAvIa/BxjVUCq6K5D/xcgQ1IhpzJNaBn5hPQfgMnxbG6Ksyak9GjnABnS2/9keYw9ts0JACY5G3tv1ibD0zcaOGcX9fhvhwAAAABJRU5ErkJggg==";
    // this.c.drawImage(img, x, y);
  }

  // draw(){
  //   for (var i = 0; i < 500; i++) {
  //     var radiusError = +10 - i / 20;
  //     var d = 2 * Math.PI / 360 * i;
  //     this.drawHelper(200 + 100 * Math.cos(d), 200 + (radiusError + 80) * Math.sin(d));
  // }


  update(){
    if (this.x + this.radius > this.gameWidth || this.x < 0){
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.gameHeight || this.y < 0) {
      this.dy = -this.dy;
    }

    // this.dy += this.gravity;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }


}

export default Bubble;