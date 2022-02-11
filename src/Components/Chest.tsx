import React from "react";
import useEnemyMovement from "../Hooks/useEnemyMovement";
import { TILE_SIZE } from "../Settings/constants";

import styles from "./Chest.module.css";

const Chest = () => {
  const { position, direction } = useEnemyMovement({
    x: 16,
    y: 4,
  });

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/CHEST.png)",
        transform: `scaleX(${direction === "right" ? 1 : -1})`,
        zIndex: 1,
      }}
      className={styles.chest}
    ></div>
  );
};

export default Chest;
