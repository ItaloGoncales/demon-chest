import React from "react";
import { TILE_SIZE } from "../Settings/constants";

import styles from "./Chest.module.css";

const Chest = () => {
  const [position, setPosition] = React.useState({
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
      }}
      className={styles.chest}
    ></div>
  );
};

export default Chest;
