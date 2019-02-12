import Bubble from './bubble';

export const startLevel = (game, levelNum) => {
  switch (levelNum) {
    case 1:
      game.addObject(new Bubble(game, 400, game.height/2, 25, 3, 0, "red"));
      break;
    case 2:
      game.addObject(new Bubble(game, 200, game.height / 3, 25, -3, 0, "blue"));
      game.addObject(new Bubble(game, 600, game.height / 3, 25, 3, 0, "blue"));
      break;
    case 3:
      game.addObject(new Bubble(game, 600, game.height / 3, 50, 3, 0, "green"));
      game.addObject(new Bubble(game, 200, game.height / 2, 25, -3, 0, "green"));
      break;
    case 4:
      // game.addObject(new Bubble(game, 100, game.height / 2, 25, -3, 0, "purple"));
      game.addObject(new Bubble(game, 200, game.height / 3, 50, -3, 0, "purple"));
      game.addObject(new Bubble(game, 500, game.height / 3, 50, 3, 0, "purple"));
      // game.addObject(new Bubble(game, 600, game.height / 2, 25, 3, 0, "purple"));
      break;
    case 5:
      game.addObject(new Bubble(game, 600, game.height / 3, 100, 3, 0, "black"));
      break;
    case 6:
      game.addObject(new Bubble(game, 600, game.height / 3, 100, 3, 0, "black"));
      game.addObject(new Bubble(game, 200, game.height / 3, 25, -3, 0, "black"));
      break;
    default:
      break;
  }
};

