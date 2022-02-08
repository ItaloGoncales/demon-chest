import React from "react";
import { DEMON_TILE_SIZE, TILE_SIZE } from "../Settings/constants";

import styles from "./Demon.module.css";

const Demon = () => {
  const [y, setY] = React.useState(10);
  const [x, setX] = React.useState(17);

  return (
    <div
      style={{
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        bottom: TILE_SIZE * y,
        left: TILE_SIZE * x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/Demon.png)",
      }}
      className={styles.demon}
    ></div>
  );
};

export default Demon;
