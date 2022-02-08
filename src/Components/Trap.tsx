import React from "react";
import { TILE_SIZE } from "../Settings/constants";

import styles from "./Trap.module.css";

const Trap = () => {
  const [y, setY] = React.useState(3);
  const [x, setX] = React.useState(8);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: 100,
        bottom: TILE_SIZE * y,
        left: TILE_SIZE * x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/TRAP.png)",
      }}
      className={styles.hero}
    ></div>
  );
};

export default Trap;
