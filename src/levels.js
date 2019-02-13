import Bubble from './bubble';

export const startLevel = (game, levelNum) => {
  switch (levelNum) {
    case 1:
      game.addObject(new Bubble(game, 400, game.height / 2, 30, 3, 0, "#82032e"));
      break;
    case 2:
      game.addObject(new Bubble(game, 200, game.height / 3, 30, -3, 0, "#0c4596"));
      game.addObject(new Bubble(game, 600, game.height / 3, 30, 3, 0, "#0c4596"));
      break;
    case 3:
      game.addObject(new Bubble(game, 600, game.height / 3, 50, 3, 0, "green"));
      game.addObject(new Bubble(game, 200, game.height / 2, 30, -3, 0, "green"));
      break;
    case 4:
      game.addObject(new Bubble(game, 200, game.height / 3, 50, -3, 0, "purple"));
      game.addObject(new Bubble(game, 500, game.height / 3, 50, 3, 0, "purple"));
      break;
    case 5:
      game.addObject(new Bubble(game, 600, game.height / 3, 70, 3, 0, "#d88934"));
      break;
    case 6:
      game.addObject(new Bubble(game, 600, game.height / 3, 70, 3, 0, "black"));
      game.addObject(new Bubble(game, 200, game.height / 3, 30, -3, 0, "black"));
      break;
    case 'won':
      game.addObject(new Bubble(game, 600, (game.height / 3) - 20 , 50, 3, 0, "black"));
      game.addObject(new Bubble(game, 600, (game.height / 3) + 30, 70, 5, 0, "purple"));
      game.addObject(new Bubble(game, 600, (game.height / 3) + 10, 30, 4, 0, "green"));
      game.addObject(new Bubble(game, 600, (game.height / 3), 10, 3, 0, "yellow"));
      game.addObject(new Bubble(game, 600, (game.height / 3) - 10, 10, 3, 0, "red"));
      game.addObject(new Bubble(game, 600, (game.height / 3), 30, 4, 0, "orange"));
      game.addObject(new Bubble(game, 600, (game.height / 3), 50, -4, 0, "pink"));
      game.addObject(new Bubble(game, 200, (game.height / 3), 30, -3, 0, "blue"));
      break;
    default:
      break;
  }
};

