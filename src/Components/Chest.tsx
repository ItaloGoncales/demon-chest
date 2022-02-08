import React from "react";
import { TILE_SIZE } from "../Settings/constants";

import styles from "./Chest.module.css";

const Chest = () => {
  const [y, setY] = React.useState(4);
  const [x, setX] = React.useState(16);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: 100,
        bottom: TILE_SIZE * y,
        left: TILE_SIZE * x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/CHEST.png)",
      }}
      className={styles.chest}
    ></div>
  );
};

export default Chest;
