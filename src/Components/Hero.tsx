import React from "react";
import { TILE_SIZE } from "../Settings/constants";

import styles from "./Hero.module.css";

const Hero = () => {
  const [y, setY] = React.useState(2);
  const [x, setX] = React.useState(1);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: 100,
        bottom: TILE_SIZE * y,
        left: TILE_SIZE * x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/HERO.png)",
      }}
      className={styles.hero}
    ></div>
  );
};

export default Hero;
