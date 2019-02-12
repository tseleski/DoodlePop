class GameView {
  constructor(game){
    this.game = game;
  }

  start() {
    if (this.game.playing) {
      c.clearRect(0, 0, innerWidth, innerHeight);
      this.game.this.gameLoop();
    }
    if (keys["ArrowLeft"]) {
      this.game.player.moveLeft();
    }
    if (keys["ArrowRight"]) {
      this.game.player.moveRight();
    }
    if (keys[" "]) {
      this.game.player.shootArrow();
    }
    if (this.game.won()) {
      this.game.printWon();
      return;
    } else if (this.game.gameOver()) {
      this.game.printGameOver();
      const play_again = document.getElementsByClassName("play-again-btn")[0];
      play_again.classList.remove('hide');
      return;
    }
    requestAnimationFrame(animate);
  }
}

export default GameView;