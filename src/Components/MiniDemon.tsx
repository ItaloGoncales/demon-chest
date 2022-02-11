import React from "react";
import useEnemyMovement from "../Hooks/useEnemyMovement";
import { HEAD_OFFSET, TILE_SIZE } from "../Settings/constants";

import styles from "./MiniDemon.module.css";

const MiniDemon = () => {
  const { position, direction } = useEnemyMovement({
    x: 8,
    y: 12,
  });

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        transform: `scaleX(${direction === "right" ? 1 : -1})`,
      }}
      className={styles.miniDemon}
    ></div>
  );
};

export default MiniDemon;
