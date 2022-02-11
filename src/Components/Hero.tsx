import React from "react";
import useHeroMovement from "../Hooks/useHeroMovement";
import { HEAD_OFFSET, TILE_SIZE } from "../Settings/constants";

import styles from "./Hero.module.css";

const Hero = () => {
  const { position, direction } = useHeroMovement();

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
        transform: `scaleX(${direction === "right" ? 1 : -1})`,
        zIndex: 1,
      }}
      className={styles.hero}
    ></div>
  );
};

export default Hero;
