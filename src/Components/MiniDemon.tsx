import React from "react";
import { HEAD_OFFSET, TILE_SIZE } from "../Settings/constants";

import styles from "./MiniDemon.module.css";

const MiniDemon = () => {
  const [position, setPosition] = React.useState({
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
      }}
      className={styles.miniDemon}
    ></div>
  );
};

export default MiniDemon;
