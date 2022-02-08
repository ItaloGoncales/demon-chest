import React from "react";
import { TILE_SIZE } from "../Settings/constants";

import styles from "./Trap.module.css";

const Trap = () => {
  const [position, setPosition] = React.useState({
    x: 8,
    y: 3,
  });

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/TRAP.png)",
      }}
      className={styles.hero}
    ></div>
  );
};

export default Trap;
