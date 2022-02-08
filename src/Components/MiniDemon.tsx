import React from "react";
import { HEAD_OFFSET, TILE_SIZE } from "../Settings/constants";

import styles from "./MiniDemon.module.css";

const MiniDemon = () => {
  const [y, setY] = React.useState(12);
  const [x, setX] = React.useState(8);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        bottom: TILE_SIZE * y,
        left: TILE_SIZE * x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      }}
      className={styles.miniDemon}
    ></div>
  );
};

export default MiniDemon;
