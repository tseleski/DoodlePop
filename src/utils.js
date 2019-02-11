

export const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2-x1;
  let yDistance = y2-y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

export const collidedWithChar = (bubble, char) => {
  let xDistance = Math.abs(char.x - bubble.x);
  let yDistance = Math.abs(char.y - bubble.y);

  if (xDistance < (bubble.radius+(char.width/2)) && (bubble.y+bubble.radius) > char.y){
    return true;
  } else {
    return false;
  }
};

export const collidedWithArrow = (bubble, arrow) => {
  let xDistance = Math.abs(bubble.x - arrow.x);

  if (xDistance < (bubble.radius)){
    if (bubble.y > arrow.y) {
      return true;
    }
  } else {
    return false;
  }
};