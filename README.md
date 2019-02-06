## Sample JS Project Proposal: DoodlePop (Bubble Trouble)

### Background

Bubble trouble is a game with a character who the player can move left and right, across the screen. The player can shoot a line vertically, and if it intersects one of the bouncing bubbles, it will split the bubble in half. If the bubble is the smallest possible size, it will destroy the bubble. When all bubbles are destroyed, the player wins the level and moves on to the next one. If the player collides with a bubble, the player loses a life. 

### Functionality & MVP  

In this game, users will be able to:

- [ ] Move left and right
- [ ] Shoot a vertical line
- [ ] Hear sounds on shooting and collisions
- [ ] Toggle sound off and on

In addition, this project will include:

- [ ] A production README

### Wireframes

This app will consist of:
- A single screen with a playing window and nav links to the Github and my LinkedIn. 
- Instructions to move left and right will be displayed below the playing window.
- Ability to toggle sound
- The name of the game and the level number will be displayed above the playing window.

![wireframes](https://github.com/appacademy/ny-portfolio-curriculum/blob/master/javascript-project/js-proposal-wireframe.jpg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `HTML5` for DOM manipulation
- `Webpack` to bundle js files.

In addition to the entry file, there will be some scripts involved in this project:

`game.js`: this script will handle the logic for creating and updating the game

`sounds.js`: controls the playing sounds

`bubble.js`: will control the bubble creation and popping

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and. Write a basic entry file and the bare bones of all 3 scripts outlined above. Goals for the day:

- Get the board setup and rendering to the screen

**Day 2**: Use this day to be able to move player character and shoot vertical lines. Start on the backend logic for the bubbles.

**Day 3**: Create the bubble logic backend. Get bubbles to bounce off the floor and only within the game screen. 

**Day 4**: Work on collision detection - bubbles with lines, spikes, and character. Work on bubbles splitting when hit by lines or spikes, and losing a life if the bubble hits the character.


### Bonus features

There are many possible features to add to this app. Some include:

- [ ] Add special items - spike shooter, money
- [ ] Add time limit