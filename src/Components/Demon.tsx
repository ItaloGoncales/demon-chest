import React from "react";
import useEnemyMovement from "../Hooks/useEnemyMovement";
import { DEMON_TILE_SIZE, TILE_SIZE } from "../Settings/constants";

import styles from "./Demon.module.css";

const Demon = () => {
  const { position, direction } = useEnemyMovement({
    x: 17,
    y: 10,
  });
  
  return (
    <div
      style={{
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/Demon.png)",
        transform: `scaleX(${direction === "right" ? 1 : -1})`,
        zIndex: 1,
      }}
      className={styles.demon}
    ></div>
  );
};

export default Demon;
