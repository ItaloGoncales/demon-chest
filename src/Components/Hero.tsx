import React from "react";
import { HEAD_OFFSET, TILE_SIZE } from "../Settings/constants";

import useEventListener from "@use-it/event-listener";

import styles from "./Hero.module.css";

const Hero = () => {
  const [position, setPosition] = React.useState({
    x: 1,
    y: 2,
  });

  useEventListener("keydown", ({ key }) => {
    console.log(key);

    switch (key.toUpperCase()) {
      case "ARROWLEFT":
      case "A": {
        setPosition((position) => ({
          x: position.x - 1,
          y: position.y,
        }));
        break;
      }
      case "ARROWRIGHT":
      case "D": {
        setPosition((position) => ({
          x: position.x + 1,
          y: position.y,
        }));
        break;
      }
      case "ARROWUP":
      case "W": {
        setPosition((position) => ({
          x: position.x,
          y: position.y + 1,
        }));
        break;
      }
      case "ARROWDOWN":
      case "S": {
        setPosition((position) => ({
          x: position.x,
          y: position.y - 1,
        }));
        break;
      }
    }
  });

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/HERO.png)",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      }}
      className={styles.hero}
    ></div>
  );
};

export default Hero;
