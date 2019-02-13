import Player from './player';
import Bubble from './bubble';
import Spike from './spike';
import Arrow from './arrow';
import { startLevel } from './levels';

class Game {
  constructor(context, width, height){
    this.context = context;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.bubbles = [];
    this.arrows = [];
    this.spikes = new Spike(this);
    this.lives = 5;
    this.level = 0;
    this.playing = true;
    this.paused = false;
    this.keys = { "ArrowRight": false, "ArrowLeft": false, " ": false};
    this.addKeyListeners = this.addKeyListeners.bind(this);
    this.play_again = document.getElementsByClassName("play-again-btn")[0];
    this.start_btn = document.getElementsByClassName("start-btn")[0];
    this.instructions = document.getElementsByClassName("instruction-list")[0];
    this.play = this.play.bind(this);
    this.drawBackground = this.drawBackground.bind(this);
    this.listenForP = this.listenForP.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.printMessage = this.printMessage.bind(this);
  }

  start(){
    this.addKeyListeners();
    this.drawBackground();
    this.printInstructions();
    this.spikes.draw();
  }

  printInstructions(){
    let line0 = "Try to pop all the bubbles!!";
    let line1 = "Use the arrow keys to move from side to side.";
    let line2 = "Use the spacebar to shoot the bubbles.";
    let line3 = "If you get rid of all the bubbles, you will advance to the next level.";
    let line4 = "Press 'p' to pause.";
    // this.context.fillStyle = "rgba(0, 0, 0, 0.4)";
    // this.context.fillRect(0, 0, this.width, this.height);
    this.context.font = "bold 16px sans-serif";
    this.context.fillStyle = 'black';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillText(line0, this.width / 2, (this.height / 3)-20);
    this.context.font = "16px sans-serif";
    this.context.fillText(" ", this.width / 2, (this.height / 3));
    this.context.fillText(line1, this.width / 2, (this.height / 3) + 20);
    this.context.fillText(line2, this.width / 2, (this.height / 3) + 40);
    this.context.fillText(line3, this.width / 2, (this.height / 3) + 60);
    this.context.fillText(line4, this.width / 2, (this.height / 3) + 80);
  }

  addKeyListeners(){
    window.addEventListener("keydown", this.keysPressed.bind(this), false);
    window.addEventListener("keyup", this.keysReleased.bind(this), false);
    this.play_again.addEventListener('click', this.restartGame.bind(this), false);
    this.start_btn.addEventListener('click', this.restartGame.bind(this), false);
  }

  keysPressed(e) {
    this.keys[e.key] = true;
    e.preventDefault();
  }

  keysReleased(e) {
    this.keys[e.key] = false;
  }

  addObject(newObject){
    if(newObject instanceof Bubble){
      this.bubbles.push(newObject);
    } else if (newObject instanceof Arrow){
      this.arrows.push(newObject);
    }
  }

  removeObject(object) {
    if (object instanceof Bubble) {
      this.bubbles.splice(this.bubbles.indexOf(object), 1);
    } else if (object instanceof Arrow) {
      this.arrows.splice(this.arrows.indexOf(object), 1);
    }
  }

  drawBackground(){
    let img = new Image();
    img.src = './images/looseleaf.jpg';
    this.context.drawImage(img, 80, 30, 400, 300, 0, 0, this.width, this.height);
  }

  checkBeatLevel(){
    if(this.bubbles.length < 1){
      this.startNextLevel();
    }
  }

  checkLostLives(){
    if(this.lives < 1){
      this.playing = false;
    }
  }

  won(){
    return (this.level === 7);
  }

  printMessage(msg){
    this.context.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.font = "70px Arial";
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(msg, this.width / 2, (this.height/2) - 20);
  }

  gameOver(){
    return !this.playing && !this.paused && (this.level > 0 && this.level < 7);
  }

  resetLevel(){
    this.lives--;
    this.arrows = [];
    this.bubbles = [];
    this.player.x = this.width/2;
    startLevel(this, this.level);
  }

  startNextLevel(){
    if(this.level === 6){
      this.playing = false;
    }
    this.level++;
    this.player.x = this.width/2;
    startLevel(this, this.level);
  }

  gameLoop(){
    if (this.keys["ArrowLeft"]) {
      this.player.moveLeft();
    }
    if (this.keys["ArrowRight"]) {
      this.player.moveRight();
    }
    if (this.keys[" "]) {
      this.player.shootArrow();
    }
    if (this.keys["p"]) {
      this.paused = !this.paused;
      this.playing = !this.playing;
      this.keys["p"] = false;
      this.listenForP();
    }
    this.drawBackground();
    this.arrows.forEach(arrow => {
      arrow.update();
    });
    this.player.draw();
    this.bubbles.forEach(bubble => {
      bubble.update();
    });
    this.spikes.draw();
    this.printLevel();
    this.printLives();
    this.checkBeatLevel();
    this.checkLostLives();
  }

  listenForP(){
    this.context.clearRect(0, 0, this.width, this.height);
    this.printMessage("Paused");
    if(this.keys["p"]) {
      this.paused = !this.paused;
      this.playing = !this.playing;
      this.keys["p"] = false;
      this.gameLoop();
    }
    if(this.paused){
      requestAnimationFrame(this.listenForP);
    }
  }

  printLives(){
    this.context.font = "bold 16px sans-serif";
    this.context.fillStyle = 'black';
    this.context.textAlign = 'left';
    this.context.fillText('LIVES:', 10, this.height-10);
    let img = new Image();
    img.src = './images/eraser.png';
    let startAtWidth = 70;
    for (let i = 0; i < this.lives; i++) {
      this.context.drawImage(img, 10, 30, 1100, 1100, startAtWidth, this.height - 25, 25, 25);
      startAtWidth += 25;      
    }
  }

  printLevel() {
    this.context.font = "bold 16px sans-serif";
    this.context.fillStyle = 'black';
    this.context.textAlign = 'left';
    this.context.fillText(`Level ${this.level}`, 10, this.height - 30);
  }

  restartGame(){
    this.start_btn.classList.add('hide');
    this.instructions.classList.remove('hide');
    this.level = 0;
    this.bubbles = [];
    this.arrows = [];
    this.lives = 5;
    this.playing = true;
    this.play_again.classList.add('hide');
    this.play();
  }

  play(){
    if (this.playing) {
      this.context.clearRect(0, 0, this.width, this.height);
      this.gameLoop();
    }
    if (this.won()) {
      this.context.clearRect(0, 0, this.width, this.height);
      this.drawBackground();
      this.player.draw();
      this.spikes.draw();
      this.printMessage("You win!");
      this.play_again.classList.remove('hide');
      return;
    } else if (this.gameOver()) {
      this.printMessage("Game Over");
      this.play_again.classList.remove('hide');
      return;
    }
    requestAnimationFrame(this.play);
  }

}

export default Game;