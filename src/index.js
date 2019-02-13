import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector('canvas');
  canvas.width = 760;
  canvas.height = 550;
  const c = canvas.getContext("2d");

  const play_again = document.getElementsByClassName("play-again-btn")[0];
  play_again.classList.add('hide');

  const GAME_WIDTH = 760;
  const GAME_HEIGHT = 550;

  const game = new Game(c, GAME_WIDTH, GAME_HEIGHT);
  game.start();

});