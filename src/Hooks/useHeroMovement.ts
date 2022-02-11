import React from "react";

import useEventListener from "@use-it/event-listener";

const useHeroMovement = () => {
  const [position, setPosition] = React.useState({
    x: 1,
    y: 2,
  });
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

  useEventListener("keydown", ({ key }: KeyboardEvent) => {
    console.log(key);

    switch (key.toUpperCase()) {
      case "ARROWLEFT":
      case "A": {
        move(position.x - 1, position.y);
        setDirection("left");
        break;
      }
      case "ARROWRIGHT":
      case "D": {
        move(position.x + 1, position.y);
        setDirection("right");
        break;
      }
      case "ARROWUP":
      case "W": {
        move(position.x, position.y + 1);
        break;
      }
      case "ARROWDOWN":
      case "S": {
        move(position.x, position.y - 1);
        break;
      }
    }
  });

  return {
    position,
    direction,
  };
};

export default useHeroMovement;
