import React from "react";
import { Position, TILE_SIZE } from "../Settings/constants";

import styles from "./Trap.module.css";

const Trap = ({ initialPosition }: { initialPosition: Position }) => {
  const [position] = React.useState(initialPosition);

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
