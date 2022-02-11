import React from "react";
import { Position } from "../Settings/constants";


const useEnemyMovement = (initialPosition: Position) => {
  const [position, setPosition] = React.useState(initialPosition);
  const [direction, setDirection] = React.useState("right");

  const move = (x: number, y: number) => {
    if (x < 1) x = 1;
    if (y < 2) y = 2;
    if (x > 18) x = 18;
    if (y > 17) y = 17;

    setPosition({
      x,
      y,
    });
  };

  React.useEffect(() => {
    const directions = ["up", "down", "left", "right"];

    const timeout = setTimeout(() => {
      const nextDirection =
        directions[Math.floor(Math.random() * directions.length)];

      switch (nextDirection) {
        case "left": {
          move(position.x - 1, position.y);
          setDirection("left");
          break;
        }
        case "right": {
          move(position.x + 1, position.y);
          setDirection("right");
          break;
        }
        case "up": {
          move(position.x, position.y + 1);
          break;
        }
        case "down": {
          move(position.x, position.y - 1);
          break;
        }
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [position]);

  return {
    position,
    direction,
  };
};

export default useEnemyMovement;
