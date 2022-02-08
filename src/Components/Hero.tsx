import React from "react";
import { HEAD_OFFSET, TILE_SIZE } from "../Settings/constants";

import styles from "./Hero.module.css";

const Hero = () => {
  const [y, setY] = React.useState(2);
  const [x, setX] = React.useState(1);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        bottom: TILE_SIZE * y,
        left: TILE_SIZE * x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/HERO.png)",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      }}
      className={styles.hero}
    ></div>
  );
};

export default Hero;
